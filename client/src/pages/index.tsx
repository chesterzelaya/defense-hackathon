import { Inter } from "next/font/google";
import { SearchBar } from "@/components/Search";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex gap-3 min-h-screen flex-col items-center justify-between p-12 ${inter.className} w-full max-w-[840px] mx-auto`}>
      <div className="flex flex-row gap-3 items-center justify-between w-full">
        <h1 className="flex font-medium text-4xl font-mono"> 3D Search Engine </h1>
        <div className="flex gap-3">
          <div className="border px-5 py-3 border-black rounded-md font-mono">Scene 1</div>
          <div className="border px-5 py-3 border-black rounded-md font-mono">Scene 2</div>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <div className="border border-gray-500 max-w-[740px] w-full  rounded-md">
            <video key={'/videos/1.mp4'} width={'100%'} controls>
              <source src={'/videos/1.mp4'} type="video/mp4"></source>
            </video>
          </div>
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
