import { FaMicrochip } from "react-icons/fa6";

export default function TypingIndicator({ isTyping }: { isTyping: boolean }) {
  return isTyping ? (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
        <FaMicrochip className="text-white" />
      </div>
      <div className="bg-slate-800/50 border border-gray-700/50 px-6 py-4 rounded-2xl backdrop-blur-md shadow-lg">
        <div className="flex space-x-2 items-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <span className="text-gray-400 text-sm ml-2">
            The system processes...
          </span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
