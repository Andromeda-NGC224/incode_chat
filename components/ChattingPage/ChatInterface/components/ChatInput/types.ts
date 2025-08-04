import { KeyboardEvent, RefObject } from "react";

export interface ChatInputProps {
  inputRef: RefObject<HTMLInputElement>;
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleSendMessage: () => void;
  isTyping: boolean;
  avatar: string;
}
