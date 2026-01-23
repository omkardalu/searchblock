import SearchBlock from "@/components/ui/SearchBlock.jsx";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 min-h-dvh p-4 justify-between">
      <header className="">
        searchblock
      </header>
      <main>
        <SearchBlock />
      </main>
      <footer>
        &copy; All Copy Rights reserved 2026.
      </footer>
    </div>
  );
}
