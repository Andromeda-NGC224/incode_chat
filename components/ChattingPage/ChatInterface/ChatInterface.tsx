"use client";

import { useState, useRef, useEffect, RefObject, KeyboardEvent } from "react";
import { Message } from "./types";
import { avatars } from "./config";

import {
  AnimatedBg,
  ChatInput,
  ChatMessagesArea,
  ChatStatus,
} from "./components";

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [onlineUsers] = useState(5);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState<string>("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    setAvatar(randomAvatar);
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "You",
      avatar,
      timestamp: new Date(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-black to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedBg />

      {/* Online Status */}
      <ChatStatus onlineUsers={onlineUsers} />

      {/* Chat Messages Area */}
      <ChatMessagesArea
        messages={messages}
        isTyping={isTyping}
        messagesEndRef={messagesEndRef as RefObject<HTMLDivElement>}
      />

      {/* Input Area */}
      <ChatInput
        inputRef={inputRef as RefObject<HTMLInputElement>}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleKeyPress={handleKeyPress}
        handleSendMessage={handleSendMessage}
        isTyping={isTyping}
        avatar={avatar}
      />
    </div>
  );
}
