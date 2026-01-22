import { NextRequest } from "next/server";

import { db_connection } from "@/lib/db_connection";
import NoteModel from "@/models/Note.model";

// create note
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, content } = body;

        if (!title || !content) {
            return new Response("Title and content are required", { status: 400 });
        }

        await db_connection();
        const newNote = await NoteModel.create({ title, content });

        return new Response(JSON.stringify(newNote), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }   
}