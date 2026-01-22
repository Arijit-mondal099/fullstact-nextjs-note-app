import CreateNoteModal from "@/components/CreateNoteModal";
import { db_connection } from "@/lib/db_connection";

export default async function Home() {
  await db_connection()

  return (
    <section className="container mx-auto py-10 space-y-6">
      <h1 className="text-4xl font-extrabold text-blue-500">Note App</h1>
      <CreateNoteModal />
    </section>
  );
}
