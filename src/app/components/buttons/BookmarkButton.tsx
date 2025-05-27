"use client";

import { Book, Bookmark } from 'lucide-react';
import { useState } from 'react';

export default function BookmarkButton() {
    const [isSaved, setIsSaved] = useState(false);

    const handleClick = () => {
        console.log('Like button clicked');
        setIsSaved(!isSaved);
    };

    return (
        <div onClick={handleClick} >
            <Bookmark
                className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                fill={isSaved ? 'black' : 'none'}
            />
        </div>
    )
}