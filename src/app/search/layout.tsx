import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-6 max-w-[300px] mx-auto">
      <div>
        <h1>Search</h1>
      </div>
      <div >
        {/* @ts-ignore */}
        <Search />
      </div>
      <div>{children}</div>
    </main>
  );
}
