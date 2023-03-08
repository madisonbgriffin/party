import { HiChevronRight } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

import { gift, gift3d, gifthand, partyboy, gift3d2 } from "../../assets"

const Hero = () => {
  const navigate = useNavigate()

  const shopPage = () => {
    navigate("/Shop")
  }

  return (
    <section className="py-14 lg:p-0 lg:py-16">
      <div className="grid lg:grid-cols-2">
        {/* Left column */}
        <div className="relative z-10 order-1 text-white lg:order-none">
          <div className="mt-10 text-center text-6xl font-black lg:mt-0 lg:text-start lg:text-6xl xl:text-7xl 2xl:text-8xl">
            THE PERFECT PARTY ALL IN ONE BOX
          </div>
          <div className="mt-3 text-center text-3xl font-normal lg:text-start lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Transform any space into a party paradise with Party in a Box,
            Simply open the box and watch as it sets up an instant celebration
            in seconds!
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              className="glass mt-5 px-10 py-5 text-center text-2xl duration-200 ease-in-out hover:scale-110 lg:mt-10 xl:text-4xl"
              onClick={shopPage}
            >
              SHOP OUR PRODUCTS
            </button>
          </div>
        </div>
        {/* Right column */}
        <div className="z-10 mx-auto w-80 lg:mx-6 lg:mt-10 lg:w-fit xl:mx-16 2xl:mx-20">
          <img src={gift3d} alt="Gift" />
        </div>
        <div className="absolute top-0 left-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#D3ACF1] opacity-[0.84] blur-[130px]" />
        <div className="absolute top-0 right-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[130px]" />
      </div>
    </section>
  )
}

export default Hero

//TODO: edit styling and responsiveness
