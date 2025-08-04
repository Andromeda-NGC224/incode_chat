export default function ChatStatus({ onlineUsers }: { onlineUsers: number }) {
  return (
    <div className="bg-black/50 backdrop-blur-md border-b border-cyan-500/20 p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          <span className="text-cyan-200 font-medium">
            {onlineUsers} participants in the network
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <span className="text-gray-400 text-sm">Neural Network Active</span>
        </div>
      </div>
    </div>
  );
}
