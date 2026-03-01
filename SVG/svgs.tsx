export function TimeBlock({ icon, label, time }: { icon: React.ReactNode; label: string; time: string }) {
    return (
        <div className="flex items-center justify-between border border-gray-600 hover:border-gray-400 hover:bg-[#1a2333] transition-colors rounded-xl p-4 cursor-pointer group">
            <div className="flex items-center space-x-4">
                <div className="text-gray-300 group-hover:text-white transition-colors">
                    {icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400">{label}</span>
                    <span className="text-sm font-semibold text-white mt-0.5">{time}</span>
                </div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-500 group-hover:text-gray-300" />
        </div>
    );
}

// Minimal inline SVGs to avoid requiring external icon libraries
export const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

export const CoffeeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
);

export const MosqueIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l-3 5h6z" />
        <path d="M9 7v15H3V12l3-3" />
        <path d="M15 7v15h6V12l-3-3" />
        <path d="M9 22h6" />
        <path d="M12 10v12" />
    </svg>
);

export const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

export const PlusIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

export const ChevronRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);