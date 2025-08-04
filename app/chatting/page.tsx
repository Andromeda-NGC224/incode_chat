import {
  AnimatedBgGrid,
  ChatHero,
  ChatInterface,
} from "@/components/ChattingPage";
import { CompactFooter, Header } from "@/components/ui";

export default function ChattingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-purple-900 relative overflow-hidden">
      <AnimatedBgGrid />
      <Header />
      <div className="pt-20 flex flex-col min-h-screen">
        <ChatHero />
        <div className="flex-1 relative">
          <ChatInterface />
        </div>
      </div>
      <CompactFooter />
    </div>
  );
}
