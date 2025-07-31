export default function WondersSection() {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/HomePage/wonders.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CYBER
              </span>
              <br />
              <span className="text-white">WONDERS</span>
            </h2>

            <p className="text-xl text-cyan-200 mb-8 leading-relaxed">
              Experience the thrill of a frozen digital realm where code pulses
              like auroras and minds connect beyond the veil of snow. From
              glowing data streams to synthetic echoes in icy silence — welcome
              to the next frontier of communication.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">
                  Neural signal storms
                </span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">
                  Ghosts in the chatstream
                </span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">
                  Echoes of lost code
                </span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-white text-sm sm:text-base">
                  Neon sky transmissions
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="text-right">
              <div className="text-7xl xl:text-9xl font-thin text-white/20 font-serif leading-none">
                SYNTH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
