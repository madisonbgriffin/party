import { HiChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import { gift, gift3d, gifthand, partyboy, gift3d2 } from "../../assets";

const Hero = () => {
  const navigate = useNavigate();

  const shopPage = () => {
    navigate("/Shop");
  };
  return (
    // Also use 'className' not 'class'
    // https://noorui.com/blog/how-to-create-bootstrap-grid-system-in-tailwindcss
    <section className="container mx-auto">
      {" "}
      <div className="lg:grid-cols-2 grid grid-cols-3 gap-1">
        <div className="text-6xl font-black text-white">
          THE PERFECT PARTY ALL IN ONE BOX
        </div>
        <div></div>{" "}
        <div className="h-60 w-60">
          <img src={gift3d} alt="Gift" />
        </div>{" "}
      </div>
    </section>
    // <div className='relative  px-6 pt-10 pb-8 ring-1 ring-gray-900/5'>
    // <div className='text-white '>
    //   <div className=' flex-auto '>
    //     <div className=''>
    //       <div className=' text-8xl font-black'>THE PERFECT PARTY ALL IN ONE BOX</div>
    //       <div className='text-4xl font-normal '>Transform any space into a
    //         party paradise with Party in a Box, Simply open the box and watch as it sets up
    //         an instant celebration in seconds!</div>
    //       <button
    //         type="button"
    //         /*glassy*/
    //         className="btn-primary"
    //         onClick={shopPage}> {/* figure out this button style */}
    //             SHOP OUR PRODUCTS

    //           {/* <HiChevronRight className='ml-3'/> arrow or no??? */}
    //           {/* make glassy */}
    //       </button>
    //     </div>

    //     <div className="w-1/2 relative z-10">
    //       <div className='mx-20'>
    //         <img src={gift3d} alt="Gift"/>
    //       </div>
    //     </div>
    //     </div>
    // <div
    //        className="absolute z-0 top-0 left-0 w-1/2 h-1/2 rounded-full bg-[#D3ACF1] opacity-[0.84] blur-[130px]"/>
    //       <div
    //         className="absolute z-0 top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[130px]"/>
    //     </div>
    //   </div>
  );
};

export default Hero;
