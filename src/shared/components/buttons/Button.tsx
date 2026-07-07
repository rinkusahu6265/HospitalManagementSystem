export default function Button({
  variant = 'primary',
  onClick,
  children,
  type = 'button',
  className = '',
  disabled,
}: {
  variant?: 'primary' | 'outlined' | 'success' | 'danger' | 'warning' | 'info' | 'text';
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-teal-600 hover:bg-teal-700 text-white shadow-sm shadow-teal-600/20 border-transparent focus:ring-teal-600/30",
    outlined: "bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-sm focus:ring-slate-200",
    success: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/20 border-transparent focus:ring-emerald-600/30",
    danger: "bg-rose-600 hover:bg-rose-700 text-white shadow-sm shadow-rose-600/20 border-transparent focus:ring-rose-600/30",
    warning: "bg-amber-500 hover:bg-amber-600 text-white shadow-sm shadow-amber-500/20 border-transparent focus:ring-amber-500/30",
    info: "bg-sky-500 hover:bg-sky-600 text-white shadow-sm shadow-sky-500/20 border-transparent focus:ring-sky-500/30",
    text: "bg-transparent hover:bg-slate-100 text-slate-600 border-transparent focus:ring-slate-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
