export default function CompactFooter() {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-cyan-500/10 py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm">
        <div className="text-gray-400">
          © 2077 Syntherra Chat Neural Network
        </div>
        <div className="flex items-center space-x-4 text-gray-400">
          <span>Quantum Encrypted</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
}
