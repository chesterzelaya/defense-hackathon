import { Inter } from "next/font/google";
import { SearchBar } from "@/components/Search";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [query, setQuery] = useState('');
  const [scene, setScene] = useState('shack');
  const [imageSrc, setImageSrc] = useState(`/scenes/${scene}/base-top.png`);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageList.length > 1) {
        setImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        setImageSrc(`/scenes/${scene}/${imageList[imageIndex]}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [imageList, imageIndex, scene]);

  const updateImageSrc = (input: string) => {
    setQuery(input);
    const inputLower = input.trim().toLowerCase();
    const scenes = {
      'shack': {
        'bottle': ['can-side.png'],
        'chair': ['chair-side.png', 'chair-top01.png'],
        'candle': ['candle-side.png', 'candle-top01.png'],
        'chips': ['chips-side.png', 'chips-top01.png'],
        'cup': ['cup-side.png', 'cup-top01.png'],
        'oreo': ['oreo-side.png', 'oreo-top01.png'],
        'wallet': ['wallet-side.png', 'wallet-top01.png'],
      },
      'greece': {
        'candle': ['candle-side.png', 'candle-top01.png'],
        'chips': ['chips-side.png', 'chips-top01.png'],
      }
    };

    const allImages = scenes[scene] || {};
    const matchedImages = Object.entries(allImages).reduce((acc, [key, values]) => {
      if (inputLower.startsWith(key)) {
        acc.push(...values);
      }
      return acc;
    }, []);

    if (matchedImages.length > 0) {
      setImageList(matchedImages);
      setImageSrc(`/scenes/${scene}/${matchedImages[0]}`);
    } else {
      setImageList([]);
      setImageSrc(`/scenes/${scene}/base-side.png`);
    }
  };

  const changeScene = (newScene: string) => {
    setScene(newScene);
    setImageSrc(`/scenes/${newScene}/base-side.png`);
    setImageList([]);
    setImageIndex(0);
  };

  return (
    <main className={`flex gap-3 min-h-screen flex-col items-center justify-between p-12 ${inter.className} w-full max-w-[840px] mx-auto`}>
      <div className="flex flex-row gap-3 items-center justify-between w-full">
        <h1 className="flex font-medium text-4xl font-mono">3D Search Engine</h1>
        <div className="flex gap-3">
          <button className="border px-5 py-3 border-black rounded-md font-mono" onClick={() => changeScene('shack')}>Scene 1</button>
          <button className="border px-5 py-3 border-black rounded-md font-mono" onClick={() => changeScene('house')}>Scene 2</button>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          {imageSrc && (
            <div className="border border-gray-500 max-w-[740px] w-full rounded-md">
              <img src={imageSrc} width={"100%"} alt="Searched item" className="max-w-full h-auto" />
            </div>
          )}
          <div className="flex w-full items-center border px-6 py-3">
            <input
              placeholder={'/search the scene'}
              className={`flex-grow resize-none outline-none text-3xl text-center`}
              value={query}
              onChange={e => updateImageSrc(e.target.value)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}