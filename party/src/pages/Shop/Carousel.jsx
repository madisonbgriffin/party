import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  Keyboard,
} from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"
import "swiper/css/keyboard"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

import { slide_images } from "../../data"

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow, Autoplay, Keyboard]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      keyboard={{
        enabled: true,
      }}
      slidesPerView={2}
      spaceBetween={50}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
    >
      <button type="button" className="swiper-button-prev">
        <HiChevronLeft className="glass bg-gradient-to-135 absolute top-40 left-5 -translate-y-1/2 text-5xl text-white hover:bg-pink-600 lg:top-1/2 lg:-left-5 lg:text-7xl" />
      </button>
      <button type="button" className="swiper-button-next">
        <HiChevronRight className="glass bg-gradient-to-135 absolute top-40 left-5 -translate-y-1/2 text-5xl text-white hover:bg-pink-600 lg:top-1/2 lg:-left-5 lg:text-7xl" />
      </button>
      {slide_images.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="h-[60vh] rounded-[50px] bg-purple-600 p-5">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full rounded-[50px] object-cover"
            />
            {/* <div className="glass absolute left-24 bottom-16 z-10 rounded-[50px] text-white">
              <h1 className="mt-5 text-center text-3xl font-bold">
                {slide.title}
              </h1>
              <p className="ml-10 mt-3 text-xl font-normal">
                {slide.description}
              </p>
              <button
                type="button"
                className="glass ml-10 mt-3 p-5 text-4xl font-medium"
              >
                See More
              </button>
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel

//   return (
//     <section className="relative py-12 lg:py-14 ">
//       <button type="button">
//         <HiChevronLeft
//           onClick={prevSlide}
//           className="glass bg-gradient-to-135 absolute top-40 left-5 -translate-y-1/2 text-5xl text-white hover:bg-pink-600 lg:top-1/2 lg:-left-5 lg:text-7xl"
//         />
//       </button>
//       <button type="button">
//         <HiChevronRight
//           onClick={nextSlide}
//           className="glass bg-gradient-to-135 absolute top-40 right-5 -translate-y-1/2 text-5xl text-white hover:bg-pink-600 lg:top-1/2 lg:-right-5 lg:text-7xl"
//         />
//       </button>
//       {slide_images.map((slider, index) => (
//         <div className="flex justify-center" key={index}>
//           {index === currentSlide && (
//             <>
//               <div className="h-60 w-80 rounded-[50px] bg-purple-600 p-5 lg:h-[60vh] lg:w-3/4">
//                 <div
//                   style={{ backgroundImage: `url(${slider.image})` }}
//                   className="h-full w-full rounded-[50px] bg-cover bg-center"
//                   title={`${slider.title} Slide`}
//                 ></div>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//       <div className="top-4 flex justify-center py-2">
//         {slide_images.map((slider, slideIndex) => (
//           <div
//             className="cursor-pointer text-3xl"
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Carousel
