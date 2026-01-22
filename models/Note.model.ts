import mongoose from "mongoose";

interface INote {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new mongoose.Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Note || mongoose.model<INote>("Note", NoteSchema);
