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
    images.push(baseImgPath + stadium.internalName + "/" + (i + 1) + ".jpg");
  }

  console.log("img", props);

  const nextClickHandler = () => {
    setCurrentIndex((currentIndex + 1) % numberOfImages);
  };

  const previousClickHandler = () => {
    setCurrentIndex((currentIndex - 1 + numberOfImages) % numberOfImages);
  };

  return (
    <div className="flex grid grid-cols-2 text-white">
      <div className="border relative">
        <img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Bilde av stadion"
          className="h-full w-auto object-contain cursor-pointer"
          onClick={() => history.back()}
        />

        {numberOfImages > 1 && (
          <>
            <div className="absolute top-0 bottom-0 left-0 w-[8svh] flex items-center justify-center gap-4 bg-black bg-opacity-50 text-2xl">
              <button
                className="previous text-3xl z-10"
                onClick={previousClickHandler}
              >
                {"<"}
              </button>
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-[8svh] flex items-center justify-center gap-4 bg-black bg-opacity-50 text-2xl">
              <button
                className="next text-3xl z-10  hover:scale-110 hover:scale-150 duration-300 ease-in-out "
                onClick={nextClickHandler}
              >
                {">"}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="mt-12 ml-12">
        <h2 className="text-center text-3xl mb-4">Beskrivelse</h2>
        <p className="">{stadium.description}</p>
      </div>
    </div>
  );
}
