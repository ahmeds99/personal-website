import { useState } from "react";
import type { IStadium } from "src/scripts/IStadium";

interface Props {
  stadium: IStadium;
  numberOfImages: number;
}

const baseImgPath = "/stadiums/";

export default function Carousel(props: Props) {
  const { stadium, numberOfImages } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [];
  for (let i = 0; i < numberOfImages; i++) {
    images.push(baseImgPath + stadium.internalName + "/" + (i + 1) + ".webp");
  }

  const nextClickHandler = () => {
    setCurrentIndex((currentIndex + 1) % numberOfImages);
  };

  const previousClickHandler = () => {
    setCurrentIndex((currentIndex - 1 + numberOfImages) % numberOfImages);
  };

  return (
    <div className="flex flex-col md:flex-row mr-28 md:mr-0 text-white">
      <div className="flex flex-col">
        <h2 className="text-center text-6xl md:text-3xl m-8">Beskrivelse</h2>
        <p className="text-3xl mb-10 pr-10 md:text-base md:mb-0">
          {stadium.description}
        </p>
      </div>

      <div className="border relative flex md:mr-0 justify-center md:block mt-4 md:mt-0">
        <img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Bilde av stadion"
          className="h-full w-auto max-w-full md:max-w-none object-contain cursor-pointer"
          onClick={() => history.back()}
        />

        {numberOfImages > 1 && (
          <>
            <div className="absolute top-0 bottom-0 left-0 w-[14svh] md:w-[8svh] flex items-center justify-center gap-4 bg-black bg-opacity-50 text-2xl">
              <button
                className="previous text-7xl md:text-3xl z-10 hover:scale-110 hover:scale-150 duration-300 ease-in-out"
                onClick={previousClickHandler}
              >
                {"<"}
              </button>
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-[14svh] md:w-[8svh] flex items-center justify-center gap-4 bg-black bg-opacity-50 text-2xl">
              <button
                className="next text-7xl md:text-3xl z-10 hover:scale-110 hover:scale-150 duration-300 ease-in-out"
                onClick={nextClickHandler}
              >
                {">"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
