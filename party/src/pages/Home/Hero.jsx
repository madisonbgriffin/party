import {gift, gift3d, gifthand, partyboy, gift3d2} from '../../assets'
import {useNavigate} from 'react-router-dom'
import {HiChevronRight} from "react-icons/hi2";

const Hero = () => {
  const navigate = useNavigate();

  const shopPage = () => {
    navigate('/Shop')
  }
  return (
    <div className=' text-white mb-40 mt-16'>
      <div className='flex'>
        <div className='w-1/2 relative z-10'>
          <div className='text-8xl font-black'>THE PERFECT PARTY ALL IN ONE BOX</div>
          <div className='text-4xl font-normal mt-3 w-4/5'>Transform any space into a
            party paradise with Party in a Box, Simply open the box and watch as it sets up
            an instant celebration in seconds!</div>
          <button
            type="button"
            /*glassy*/
            className="btn-primary"
            onClick={shopPage}> {/* figure out this button style */}
                SHOP OUR PRODUCTS
              
              {/* <HiChevronRight className='ml-3'/> arrow or no??? */}
              {/* make glassy */}
          </button>
        </div>
        <div className="w-1/2 relative z-10">
          <div className='mx-20'>
            <img src={gift3d} alt="Gift"/>
          </div>
        </div>

        <div
          className="absolute z-0 top-0 left-0 w-1/2 h-1/2 rounded-full bg-[#D3ACF1] opacity-[0.84] blur-[130px]"/>
        <div
          className="absolute z-0 top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[130px]"/>
      </div>
    </div>
  )
}

export default Hero