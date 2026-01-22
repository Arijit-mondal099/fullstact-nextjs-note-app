"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const CreateNoteModal = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border border-gray-800 shadow p-4 w-full rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="mb-2 flex flex-col gap-1">
          <label htmlFor="title" className="text-lg font-medium text-gray-400">
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
  );
};

export default CreateNoteModal;
