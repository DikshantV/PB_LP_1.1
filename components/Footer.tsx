import Image from "next/image";
import Logo from "@/public/assests/logo.svg";
import {
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-16 gap-8 justify-between md:px-20 xl:px-44">
      <div className="flex flex-col gap-8 text-gray-300/85 max-w-[300px]">
        <Image src={Logo} alt="Logo" className="cursor-pointer" />
        <div>
          <div className="font-semibold text-white underline text-lg">
            <a href="https://prep-bettr.vercel.app/sign-up" target="_blank" rel="noopener noreferrer">
              PrepBettr<MdOutlineArrowOutward className="inline"  />
            </a>
          </div>
          <span className="text-sm">
    AI-powered Mock Interview Platform
  </span>
        </div>
        <div className="flex gap-4 text-2xl cursor-pointer">
          <a href="https://github.com/DikshantV" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/dikshant-vashistha-bb632112a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:scale-125" />
          </a>
          <FaYoutube className="hover:scale-125" />
          <FaXTwitter className="hover:scale-125" />
        </div>
        <div className="text-sm text-gray-400">
          &copy; 2025 PrepBettr. All rights reserved.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Product</div>
        <a href="/features" className="cursor-pointer text-gray-300/85 hover:underline">Features</a>
        <a href="/integrations" className="cursor-pointer text-gray-300/85 hover:underline">Integrations</a>
        <a href="/updates" className="cursor-pointer text-gray-300/85 hover:underline">Updates</a>
        <a href="/faq" className="cursor-pointer text-gray-300/85 hover:underline">FAQ</a>
        <a href="/pricing" className="cursor-pointer text-gray-300/85 hover:underline">Pricing</a>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Company</div>
        <a href="/about" className="cursor-pointer text-gray-300/85 hover:underline">About</a>
        <a href="/contact" className="cursor-pointer text-gray-300/85 hover:underline">Contact</a>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Legal</div>
        <a href="/privacy" className="cursor-pointer text-gray-300/85 hover:underline">Privacy</a>
        <a href="/terms" className="cursor-pointer text-gray-300/85 hover:underline">Terms</a>
        <a href="/security" className="cursor-pointer text-gray-300/85 hover:underline">Security</a>
      </div>
    </div>


  );
};

export default Footer;
