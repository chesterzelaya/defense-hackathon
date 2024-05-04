import { Inter } from "next/font/google";
import { SearchBar } from "@/components/Search";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} w-full`}>
        <h1 className="flex font-bold text-2xl font-mono max-w-[620px] "> 3D Search Engine </h1>
        <SearchBar />
        <div className="border border-gray-500 max-w-[620px]  w-full min-h-96 rounded-md">
          <h1 className="p-10">video here</h1>
        </div>
        <div className="flex-1"></div>
    </main>
  );
}
