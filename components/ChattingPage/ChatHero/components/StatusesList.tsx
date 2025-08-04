export default function StatusesList() {
  const statuses = [
    {
      title: "Network Active",
      dotColor: "bg-green-text",
      shadowColor: "shadow-green-400/50",
      borderColor: "border-cyan-500/20",
    },
    {
      title: "Signal Detected",
      dotColor: "bg-purple-text",
      shadowColor: "shadow-purple-400/50",
      borderColor: "border-purple-500/20",
    },
    {
      title: "Neuro-protocol",
      dotColor: "bg-bluedark-text",
      shadowColor: "shadow-cyan-400/50",
      borderColor: "border-cyan-500/20",
    },
  ];

  return (
    <ul className="flex justify-center items-center space-x-8 text-bluedark-text mb-8">
      {statuses.map((status, index) => (
        <li
          key={index}
          className={`flex items-center space-x-3 bg-slate-800/50 px-4 py-2 rounded-full border ${status.borderColor} backdrop-blur-md`}
        >
          <div
            className={`w-3 h-3 ${status.dotColor} rounded-full animate-pulse shadow-lg ${status.shadowColor}`}
          ></div>
          <span className="text-sm font-medium">{status.title}</span>
        </li>
      ))}
    </ul>
  );
}
