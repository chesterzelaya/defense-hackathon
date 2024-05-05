import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

interface SceneItems {
  [item: string]: string[];  
}

interface Scenes {
  [scene: string]: SceneItems;  
}

const scenes: Scenes = {
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
    'lamp': ['lamp-side.png', 'lamp-top01.png'],
    'pool': ['pool-side.png', 'pool-top01.png'],
    'table': ['table-side.png', 'table-top01.png'],
  },
}


export default function Home() {
  const [query, setQuery] = useState('');
  const [scene, setScene] = useState('shack');
  const [imageSrc, setImageSrc] = useState(`/scenes/${scene}/base-side.png`);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageList.length > 1) {
        setImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        setImageSrc(`/scenes/${scene}/${imageList[imageIndex]}`);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [imageList, imageIndex, scene]);

  const updateImageSrc = (input: string) => {
    setQuery(input);
    const inputLower = input.trim().toLowerCase();

    const allImages = scenes[scene] || {};
    const matchedImages = Object.entries(allImages).reduce<string[]>((acc, [key, values]) => {
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
        <h1 className="flex font-medium text-4xl font-mono">3D Scout</h1>
        <div className="flex gap-3 items-center">
          <h1 className="text-gray-600">Scenes</h1>
          <button className="border px-5 py-3 border-black rounded-md font-mono hover:bg-gray-300" onClick={() => changeScene('shack')}>Shack</button>
          <button className="border px-5 py-3 border-black rounded-md font-mono hover:bg-gray-300" onClick={() => changeScene('greece')}>Greece</button>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          {imageSrc && (
            <div className="border border-gray-500 max-w-[740px] w-full rounded-md">
              <img src={imageSrc} width={"100%"} alt="Searched item" className="max-w-full h-auto" />
            </div>
          )}
          <div className="flex w-full items-center px-6 py-3">
            <input
              placeholder="/search the scene"
              className="flex-grow resize-none outline-none text-3xl text-center"
              value={query}
              onChange={e => updateImageSrc(e.target.value)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}