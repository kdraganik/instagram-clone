import { connect } from "http2";
import { NextResponse } from "next/server";
import { Client } from 'pg'

export async function GET(request: Request) {
    console.log('KEY:', process.env.DATABASE_URL);

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    await client.connect();
    const res = await client.query('SELECT NOW()');
    return NextResponse.json(res.rows[0]);
}
