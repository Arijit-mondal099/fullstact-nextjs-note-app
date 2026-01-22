import { db_connection } from "@/lib/db_connection";

export default async function Home() {
  await db_connection()

  return (
    <section>
      <h1>Note App</h1>
    </section>
  );
}
