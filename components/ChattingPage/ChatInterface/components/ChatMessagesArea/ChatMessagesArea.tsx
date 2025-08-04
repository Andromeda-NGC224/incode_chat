import Image from "next/image";
import TypingIndicator from "../TypingIndicator";
import { ChatMessageAreaProps } from "./types";

export default function ChatMessagesArea({
  messages,
  isTyping,
  messagesEndRef,
}: ChatMessageAreaProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-6xl mx-auto w-full">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
          <p className="text-xl font-semibold mb-4">
            Start a conversation in Synterra Chat!
          </p>
          <p className="text-md">
            Type your first message below to get started.
          </p>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all duration-300"
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <Image
                width={48}
                height={48}
                src={message.avatar}
                alt={message.sender}
                className="rounded-full border-2 border-cyan-400/50 object-cover shadow-lg shadow-cyan-500/25"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline space-x-2 mb-2">
                <span
                  className={`font-semibold ${
                    message.isUser ? "text-cyan-400" : "text-purple-400"
                  }`}
                >
                  {message.sender}
                </span>
                <span className="text-gray-500 text-xs">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <div
                className={`p-4 rounded-2xl ${
                  message.isUser
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30"
                    : "bg-slate-800/50 border border-gray-700/50"
                } backdrop-blur-md shadow-lg`}
              >
                <p className="text-gray-100 leading-relaxed">{message.text}</p>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Typing Indicator */}
      <TypingIndicator isTyping={isTyping} />

      <div ref={messagesEndRef} />
    </div>
  );
}
