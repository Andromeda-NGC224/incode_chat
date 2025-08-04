export default function ChatTitle() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          SYNTHERRA CHAT
        </span>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-lg -z-10 animate-pulse"></div>
      </h1>

      <p className="text-xl text-bluelight-text max-w-3xl mx-auto leading-relaxed mb-8">
        Connect to the frozen mainframe of the cyber frontier. Chat in real time
        with digital drifters and data-born minds from across the neon North.
      </p>
    </>
  );
}
