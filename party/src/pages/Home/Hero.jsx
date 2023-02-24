import { HiChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import { gift, gift3d, gifthand, partyboy, gift3d2 } from "../../assets";

const Hero = () => {
  const navigate = useNavigate();

  const shopPage = () => {
    navigate("/Shop");
  };

  return (
    <section className=" mx-auto py-10">
      <div className="grid lg:grid-cols-2">
        <div className=" relative z-10 text-white">
          <div className=" lg:text-7xl text-5xl font-black">
            THE PERFECT PARTY ALL IN ONE BOX
          </div>
          <div className="mt-3 lg:text-4xl text-3xl font-normal">
            Transform any space into a party paradise with Party in a Box,
            Simply open the box and watch as it sets up an instant celebration
            in seconds!
          </div>
          <button
            type="button"
            className="glass mt-10 mr-2 mb-2 px-10 py-5 text-center text-3xl lg:text-4xl duration-200 ease-in-out hover:scale-110"
            onClick={shopPage}
          >
            SHOP OUR PRODUCTS
          </button>
        </div>
        <div className="z-10 lg:mx-15 w-60">
          <img className= "object-cover" src={gift3d} alt="Gift" />
        </div>
        <div className="absolute top-0 left-0 z-0 h-1/2 w-1/2 rounded-full bg-[#D3ACF1] opacity-[0.84] blur-[130px]" />
        <div className="absolute top-0 right-0 z-0 h-1/2 w-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[130px]" />
      </div>
    </section>
  );
};

export default Hero;
