import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp, IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 text-main-text py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-bluedark-text hover:text-bluelight-text transition-colors">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-cyan-300 bg-clip-text text-transparent brightness-125 contrast-125 drop-shadow">
                Syntherra <span className="text-main-text">Chat</span>
              </span>
            </h3>
            <p className="text-gray-text mb-4 max-w-md ">
              Experience the digital frontier of Norway&apos;s cyber landscapes.
              From neon-lit fjords to neural networks, explore the future of
              Scandinavian adventures.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-bluedark-text to-purple-text rounded-full cursor-pointer hover:from-bluelight-text hover:to-purple-text transition-all duration-300">
                <FaFacebookF className="text-main-text" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-bluedark-text to-purple-text rounded-full cursor-pointer hover:from-bluelight-text hover:to-purple-text transition-all duration-300">
                <FaInstagram className="text-main-text" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-bluedark-text to-purple-text rounded-full cursor-pointer hover:from-bluelight-text hover:to-purple-text transition-all duration-300">
                <FaTwitter className="text-main-text" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-bluedark-text">
              Neural Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/description"
                  className="text-gray-text hover:text-bluedark-text transition-colors cursor-pointer"
                >
                  Neural Description
                </a>
              </li>
              <li>
                <a
                  href="/chatting"
                  className="text-gray-text hover:text-bluedark-text transition-colors cursor-pointer"
                >
                  Cyber Chat
                </a>
              </li>
            </ul>

            <h4 className="font-semibold text-lg mb-4 mt-6 text-purple-text">
              Contact Node
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <FaPhoneAlt className="text-bluedark-text" />
                </div>
                <span className="text-gray-text">+47 0000 0101</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <IoMailSharp className="text-bluedark-text" />
                </div>
                <span className="text-gray-text">neural@synterra_chat.net</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <IoLocationSharp className="text-bluedark-text" />
                </div>
                <span className="text-gray-text">Digital Oslo, Norway</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-darkgray-text text-sm">
            © 2077 Syntherra Chat. All neural rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-darkgray-text hover:text-bluedark-text text-sm transition-colors cursor-pointer"
            >
              Privacy Protocol
            </Link>
            <Link
              href="#"
              className="text-darkgray-text hover:text-bluedark-text text-sm transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
