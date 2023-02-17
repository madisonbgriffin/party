import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";

import { slide_images } from "../../data";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slide_images.length - 1 ? 0 : currentSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slide_images.length - 1 : currentSlide - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  if (!Array.isArray(slide_images) || slide_images.length <= 0) {
    return null;
  }

  return (
    <section className="relative p-16">
      <button type="button">
        <HiChevronLeft
          onClick={prevSlide}
          className="glass bg-gradient-to-135 absolute top-1/2 -left-5 -translate-y-1/2 text-7xl text-white hover:bg-pink-600"
        />
      </button>
      <button type="button">
        <HiChevronRight
          onClick={nextSlide}
          className="glass bg-gradient-to-135 absolute top-1/2 -right-5 -translate-y-1/2 text-7xl text-white hover:bg-pink-600"
        />
      </button>
      {slide_images.map((slider, index) => (
        <div className="flex justify-center" key={index}>
          {index === currentSlide && (
            <>
              <div className="h-[60vh] w-3/4 rounded-[50px] bg-purple-600 p-5">
                <div
                  style={{ backgroundImage: `url(${slider.image})` }}
                  className="h-full w-full rounded-[50px] bg-cover bg-center"
                  title={`${slider.title} Slide`}
                ></div>
              </div>
              <div className="glass absolute left-24 bottom-16 z-10 h-1/3 w-1/4 rounded-[50px] text-white">
                <h1 className="mt-5 text-center text-4xl font-bold">
                  {slider.title}
                </h1>
                <p className="ml-10 mt-3 text-xl font-normal">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  sint!
                </p>
                <button
                  type="button"
                  className="glass ml-10 mt-3 p-5 text-4xl font-medium"
                >
                  See More
                </button>
              </div>
            </>
          )}
        </div>
      ))}
      <div className="top-4 flex justify-center py-2">
        {slide_images.map((slider, slideIndex) => (
          <div
            className="cursor-pointer text-3xl"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
