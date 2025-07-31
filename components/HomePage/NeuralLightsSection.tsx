export default function NeuralLightsSection() {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/HomePage/neural_lights.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto ">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Neural
            </span>
            <br />
            <span className="text-white">Lights</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-cyan-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Witness the most mesmerizing digital phenomenon across the frozen
            datascape. Pulsing streams of neon green, violet, and cyan ripple
            through the virtual sky — a hypnotic display of code-born auroras
            lighting up the mindnet.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">
                Signal Surge Season
              </h3>
              <p className="text-cyan-200 text-sm sm:text-base">
                Constantly 24/7
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-2">
                Peak Activity
              </h3>
              <p className="text-purple-200 text-sm sm:text-base">
                5 PM - 2 AM
              </p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">
                Best Nodes
              </h3>
              <p className="text-cyan-200 text-sm sm:text-base">
                Core Grid • FrostHub • Syntherra Nexus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
