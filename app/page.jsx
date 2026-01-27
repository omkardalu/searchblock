import SearchBlock from "@/components/ui/SearchBlock.jsx";

export default function Home() {
  return (
    <div className="flex text-white flex-col bg-[#212121] gap-0 min-h-dvh p-4 justify-between">
      <header className="capitalize text-2xl mx-auto">
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
