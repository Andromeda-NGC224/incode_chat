import { FaMicrochip } from "react-icons/fa6";
import { RiBrainLine } from "react-icons/ri";

export default function IconsDecor() {
  return (
    <div className="flex justify-center items-center space-x-12">
      {/* Left Icon */}
      <div className="relative group">
        <div className="w-16 h-16 flex items-center justify-center border-2 border-cyan-500/40 rounded-2xl bg-slate-800/50 backdrop-blur-md hover:bg-cyan-500/20 transition-all duration-500 cursor-pointer">
          <FaMicrochip className="text-3xl text-bluedark-text group-hover:rotate-90 transition-transform duration-500" />
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Center Pulse Animation */}
      <div className="relative">
        <ul className="flex space-x-3">
          <li className="w-4 h-4 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-400/50"></li>
          <li
            className="w-4 h-4 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50"
            style={{ animationDelay: "0.2s" }}
          ></li>
          <li
            className="w-4 h-4 bg-pink-500 rounded-full animate-bounce shadow-lg shadow-pink-500/50"
            style={{ animationDelay: "0.4s" }}
          ></li>
        </ul>
        <ul className="absolute inset-0 flex space-x-3">
          <li className="w-4 h-4 bg-cyan-400/30 rounded-full animate-ping"></li>
          <li
            className="w-4 h-4 bg-purple-500/30 rounded-full animate-ping"
            style={{ animationDelay: "0.2s" }}
          ></li>
          <li
            className="w-4 h-4 bg-pink-500/30 rounded-full animate-ping"
            style={{ animationDelay: "0.4s" }}
          ></li>
        </ul>
      </div>

      {/* Right Icon */}
      <div className="relative group">
        <div className="w-16 h-16 flex items-center justify-center border-2 border-purple-500/40 rounded-2xl bg-slate-800/50 backdrop-blur-md hover:bg-purple-500/20 transition-all duration-500 cursor-pointer">
          <RiBrainLine className="text-3xl text-purple-text group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}
