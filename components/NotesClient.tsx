"use client";

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

interface INote {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const NotesClient = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState<INote[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getNotes = useCallback(async (): Promise<void> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notes`,
      );
      const data = await res.json();

      if (data.success) {
        setNotes(data.notes);
      } else {
        console.error(data.message || "Failed to fetch notes");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await res.json();

      if (data?.success) {
        setNotes([data.note, ...notes]);
      } else {
        console.error(data.message || "Failed to create notes");
      }

      setFormData({ content: "", title: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteNote = async (id: string): Promise<void> => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="border border-gray-800 shadow p-4 w-full rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="mb-2 flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-400"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full text-gray-400 p-3 rounded-lg outline-none border border-gray-800 focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <div className="mb-2 flex flex-col gap-1">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              placeholder="Content"
              value={formData.content}
              onChange={handleChange}
              className="w-full text-gray-400 p-3 rounded-lg outline-none border border-gray-800 focus:ring-2 focus:ring-blue-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-lg"
          >
            Create
          </button>
        </form>
      </div>

      <div className="border border-gray-800 shadow p-4 w-full rounded-lg space-y-4">
        {notes.length ? (
          notes.map((n) => (
            <div
              key={n._id}
              className="border border-gray-800 shadow p-4 w-full rounded-lg space-y-4"
            >
              <div>
                <h4 className="text-lg font-semibold">{n.title}</h4>
                <p className="text-sm font-medium tracking-tight text-gray-400">
                  {n.content}
                </p>
              </div>

              <div className="text-gray-400 text-xs font-medium">
                <p>Created: {new Date(n.createdAt).toLocaleDateString()}</p>
                <p>Updated: {new Date(n.updatedAt).toLocaleDateString()}</p>
              </div>

              <div className="space-x-4">
                <button className="bg-green-500 px-6 py-2 rounded-lg text-sm font-semibold">
                  Edit
                </button>
                <button
                  className="bg-red-500 px-6 py-2 rounded-lg text-sm font-semibold"
                  onClick={() => handleDeleteNote(n._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Oops looks like you haven&apos;t created yet!</p>
        )}
      </div>
    </>
  );
};

export default NotesClient;
