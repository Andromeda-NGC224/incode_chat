export default function AnimatedBg() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
}
