export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 10H28" stroke="currentColor" strokeWidth="2" />
        <path d="M4 16H28" stroke="currentColor" strokeWidth="2" />
        <path d="M4 22H28" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="28" r="1.5" fill="currentColor" />
        <path d="M16 22V28" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="font-semibold text-xl tracking-tight">SmartBlinds<span className="text-stone-500">KC</span></span>
    </div>
  );
}
