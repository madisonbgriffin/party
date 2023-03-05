import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



import { partylogo } from "../assets";


const Footer = () => {
  const navigate = useNavigate()

  const homePage = () => {
    navigate("/")
  }
  return (
    <footer className="bg-[#190039]/[.70] text-white">
      <div className="container mx-auto py-16">
        <div className="p-5 text-center lg:mx-20 lg:p-1 lg:text-left xl:mx-24">
          <img
            className="mx-auto mb-8 h-40 cursor-pointer"
            src={partylogo}
            alt="Logo"
            onClick={homePage}
          />
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-12">
            <div className="items-center justify-center sm:items-start">
              <h3 className="mb-4 text-lg font-bold uppercase text-white">
                About us
              </h3>
              <p className="mb-4 text-lg">
                Our founders started Party in a Box because we believe that
                celebrating life's milestones should be easy and fun. That's why
                we've created a product that makes party planning a breeze, so
                you can focus on enjoying the moment with your loved ones.
              </p>
              <div className="flex items-center justify-center space-x-4 text-3xl lg:justify-start">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white" />
                </a>
              </div>
            </div>
            <div className="text-lg">
              <h3 className="mb-4 font-bold uppercase text-white">
                Contact Us
              </h3>
              <p className="mb-2">
                <span className="font-bold">Address:</span> 575 Lambuth Blvd.,
                Jackson, TN, USA
              </p>
              <p className="mb-2">
                <span className="font-bold">Phone:</span> (731) 420-6969
              </p>
              <p className="mb-2">
                <span className="font-bold">Email:</span> bigmacsparty@gmail.com
              </p>
              <p className="mb-2">
                <span className="font-bold">Hours:</span> Mon-Fri 6am-9pm
              </p>
            </div>
            <div className="text-lg">
              <h3 className="mb-4 font-bold uppercase text-white">
                Other Info
              </h3>
              <p className="mb-2">
                <span className="font-bold">Privacy Policy</span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Terms of Use</span>
              </p>
              <p className="mb-2">
                <span className="font-bold">FAQ</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2A0A60] py-9 text-center text-xl">
        © BIG MACS 2023
      </div>
    </footer>
  )
}

export default Footer

//TODO: styling and responsivenss
//TODO: edit content and add social media links