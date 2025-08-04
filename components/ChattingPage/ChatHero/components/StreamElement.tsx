export default function StreamElement() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center space-x-2 text-xs text-darkgray-text">
        <span>STREAM:</span>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-4 bg-cyan-400/30 animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
