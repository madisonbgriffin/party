import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { partylogo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#190039] text-white opacity-70">
      <div className="container mx-auto py-16">
        <div className="lg:mx-30 mx-5 p-5 text-center lg:p-1 lg:text-left">
          <img className="mx-auto mb-8 h-40" src={partylogo} alt="Logo" />
          <div className="grid gap-4 lg:gap-12 lg:grid-cols-3">
            <div className="items-center justify-center sm:items-start">
              <h3 className="mb-4 font-bold uppercase text-white text-lg">About us</h3>
              <p className="mb-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea asperiores neque qui, quod ducimus nostrum molestias
                quibusdam reprehenderit doloribus?
              </p>
              <div className="flex items-center space-x-4 text-3xl justify-center lg:justify-start">
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
                <span className="font-bold">Address:</span> 123 Main Street,
                Suite 200, Anytown USA
              </p>
              <p className="mb-2">
                <span className="font-bold">Phone:</span> (555) 555-5555
              </p>
              <p className="mb-2">
                <span className="font-bold">Email:</span> info@example.com
              </p>
              <p className="mb-2">
                <span className="font-bold">Hours:</span> Mon-Fri 9am-5pm
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
  );
};

export default Footer;
