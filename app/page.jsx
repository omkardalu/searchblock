import SearchBlock from "@/components/ui/SearchBlock.jsx";

export default function Home() {
  return (
    <div className="flex text-white flex-col bg-[#212121] gap-0 min-h-dvh p-4 justify-between">
      <header className="capitalize text-2xl">searchblock</header>
      <main className="flex flex-col items-center justify-center gap-44 grow">
        <SearchBlock />
        <div className="w-86 flex flex-col font-mono text-2xl text-[#303030]">
          <p className="self-start">
            Skip <span className="text-white">Suggestions</span>
          </p>
          <p className="self-end">
            Search with <span className="text-white">Intent</span>
          </p>
        </div>
      </main>
    </div>
  );
}
