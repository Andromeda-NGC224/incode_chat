export interface Message {
  id: number;
  text: string;
  sender: string;
  avatar: string;
  timestamp: Date;
  isUser: boolean;
}
