import { NextRequest, NextResponse } from "next/server";

import { db_connection } from "@/lib/db_connection";
import NoteModel from "@/models/Note.model";

// get notes
export async function GET(req: NextRequest) {
    try {
        await db_connection();
        const notes = await NoteModel.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, notes }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    } 
}

// create note
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, content } = body;

        if (!title || !content) {
            return NextResponse.json({ success: false, message: "Title and content are required" }, { status: 400 });
        }

        await db_connection();
        const newNote = await NoteModel.create({ title, content });

        return NextResponse.json({ success: true, note: newNote }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }   
}