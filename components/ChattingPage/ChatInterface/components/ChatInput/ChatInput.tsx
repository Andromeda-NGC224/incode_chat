import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";

import { ChatInputProps } from "./types";

export default function ChatInput({
  inputRef,
  inputMessage,
  setInputMessage,
  handleKeyPress,
  handleSendMessage,
  isTyping,
  avatar,
}: ChatInputProps) {
  return (
    <div className="p-6 bg-black/70 backdrop-blur-md border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          {/* User Avatar */}
          <div className="flex-shrink-0">
            {avatar ? (
              <Image
                width={48}
                height={48}
                src={avatar}
                alt="Your avatar"
                className="rounded-full border-2 border-cyan-400 object-cover shadow-lg shadow-cyan-500/50"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-cyan-400" />
            )}
          </div>

          {/* Input Field */}
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter the message into the neural network..."
              className="w-full bg-slate-800/80 border border-cyan-500/30 rounded-full px-6 py-4 text-cyan-100 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/25 transition-all duration-300 backdrop-blur-md"
              disabled={isTyping}
            />

            {/* Input decor */}
            <div className="absolute right-4 sm:right-16 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <div className="w-2 h-2 bg-bluedark-text rounded-full animate-pulse"></div>
              <div
                className="w-1 h-1 bg-purple-text rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 text-white p-4 rounded-full font-semibold transition-all duration-300 hover:scale-110 disabled:scale-100 cursor-pointer shadow-xl shadow-cyan-500/25 disabled:shadow-none group"
          >
            <div className="w-6 h-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <RiSendPlaneFill size={24} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
