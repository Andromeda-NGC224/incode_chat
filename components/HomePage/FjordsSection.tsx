export default function FjordsSection() {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/HomePage/fjords.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  DIGITAL
                </span>
                <br />
                <span className="text-white">FJORDS</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
                Traverse the fractured landscapes of frozen code — vast neural
                valleys carved by time and data. Within these synthetic depths
                flow pulses of light, memory streams, and echoes of a forgotten
                digital age.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-200 mb-2">
                    Geiracore
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold">
                    Legacy archive node (UNESCO-class protected memory)
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-200 mb-2">
                    Nærøynet
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold">
                    Narrowest data channel in the entire Grid
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-200 mb-2">
                    HardaCluster
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold">
                    Hybrid zone for organic-tech convergence
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-cyan-200 mb-2">
                    LightVault
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold">
                    Access point to the Protocol
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block text-right">
              <div className="text-7xl xl:text-9xl font-thin text-white/15 font-serif leading-none">
                SYSTEM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
