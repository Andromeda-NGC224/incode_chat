import {
  AnimatedBg,
  ChatTitle,
  IconsDecor,
  StatusesList,
  StreamElement,
} from "./components";

export default function ChatHero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-black to-purple-900 py-20 border-b border-cyan-500/20 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBg />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <ChatTitle />
          <StatusesList />
        </div>

        <IconsDecor />

        <StreamElement />
      </div>
    </div>
  );
}
