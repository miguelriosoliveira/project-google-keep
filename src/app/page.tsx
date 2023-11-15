import { NewNote, NoteList } from '@/components';

export default function Home() {
  return (
    <main className="p-4 grid gap-4">
      <NewNote />
      <NoteList />
    </main>
  );
}
