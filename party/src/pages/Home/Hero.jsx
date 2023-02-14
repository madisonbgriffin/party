import { HiChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import { gift, gift3d, gifthand, partyboy, gift3d2 } from "../../assets";

const Hero = () => {
  const navigate = useNavigate();

  const shopPage = () => {
    navigate("/Shop");
  };

  return (
    <section className=" min-h-screen mx-auto py-16">
      <div className="grid grid-cols-2 gap-1">
        <div className=" relative z-10 text-white">
          <div className=" text-7xl font-black">
            THE PERFECT PARTY ALL IN ONE BOX
          </div>
          <div className="mt-3 text-4xl font-normal">
            Transform any space into a party paradise with Party in a Box,
            Simply open the box and watch as it sets up an instant celebration
            in seconds!
          </div>
          <button
            type="button"
            className="glass mt-10 mr-2 mb-2 px-10 py-5 text-center text-5xl"
            onClick={shopPage}
          >
            SHOP OUR PRODUCTS
          </button>
        </div>
        <div className="z-10  mx-20">
          <img src={gift3d} alt="Gift" />
        </div>
        <div className="absolute top-0 left-0 z-0 h-1/2 w-1/2 rounded-full bg-[#D3ACF1] opacity-[0.84] blur-[130px]" />
        <div className="absolute top-0 right-0 z-0 h-1/2 w-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[130px]" />
      </div>
    </section>
  );
};

export default Hero;
