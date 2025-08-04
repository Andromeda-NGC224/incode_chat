import { Message } from "@/components/ChattingPage/ChatInterface/types";
import { RefObject } from "react";

export interface ChatMessageAreaProps {
  messages: Message[];
  isTyping: boolean;
  messagesEndRef: RefObject<HTMLDivElement | null>;
}
