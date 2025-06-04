export default function DMConversationItem({ name, avatar, lastSeen, time, bg, onConversationClick }: { name: string; avatar: string; lastSeen: string; time: string; bg: string; onConversationClick: () => void }) {
    return (
        <div className="flex items-center px-4 py-4  cursor-pointer" onClick={onConversationClick}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${bg}`}>
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="text-white font-medium text-sm">{name}</div>
                <div className="text-gray-400 text-xs mt-1">{lastSeen}</div>
            </div>
            <div className="text-sky-500 text-xs font-medium">{time}</div>
        </div>
    );
}