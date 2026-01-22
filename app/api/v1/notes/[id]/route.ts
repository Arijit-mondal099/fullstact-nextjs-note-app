import { db_connection } from "@/lib/db_connection";
import NoteModel from "@/models/Note.model";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  params: {
    id: string;
  };
}

export async function DELETE(req: NextRequest, { params }: IParams) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ success: false, message: "Note ID is required" }, { status: 400 });
    }

    await db_connection();
    const deletedNote = await NoteModel.findByIdAndDelete(id);

    if (!deletedNote) {
      return NextResponse.json({ success: false, message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Note deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error", error },
      { status: 500 }
    );
  }
}
