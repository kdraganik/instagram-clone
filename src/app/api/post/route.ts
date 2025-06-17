import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const bio = formData.get('bio') as string;
        let userId = (formData.get('userId') as string)?.trim();

        console.log("Received userId:", userId);

        if (!file || !bio || !userId) {
            return new Response(JSON.stringify({ error: 'File, bio, and userId are required' }), { status: 400 });
        }

        // Normalize the userId (e.g., to lowercase)
        userId = userId.toLowerCase();

        const arrayBuffer = await file.arrayBuffer();
        const base64File = Buffer.from(arrayBuffer).toString('base64');

        console.log(base64File);
        console.log(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`);

        const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                image: base64File,
                name: file.name,
            }),
        });

        if (!imgbbResponse.ok) {
            const errorData = await imgbbResponse.json();
            console.error('Error uploading image:', errorData);
            return new Response(JSON.stringify({ error: 'Failed to upload image', details: errorData }), { status: 500 });
        }
        const imgbbData = await imgbbResponse.json();
        if (!imgbbData.data || !imgbbData.data.url) {
            console.error('Invalid response from image upload service:', imgbbData);
            return new Response(JSON.stringify({ error: 'Invalid response from image upload service' }), { status: 500 });
        }
        const imageUrl = imgbbData.data.url;

        // Verify that the user exists.
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        console.log("User from DB:", user);
        if (!user) {
            return new Response(JSON.stringify({ error: 'Invalid userId provided' }), { status: 400 });
        }

        const post = await prisma.post.create({
            data: {
                caption: bio || null,
                imageUrl,
                user: {
                    connect: { id: userId } // Connect post to the existing user
                },
            },
        });

        return new Response(JSON.stringify({ message: 'Post created successfully', post: post }), { status: 200 });
    } catch (error) {
        console.error('Error creating post:', error);
        return new Response(JSON.stringify({ error: 'Failed to create post' }), { status: 500 });
    }
}