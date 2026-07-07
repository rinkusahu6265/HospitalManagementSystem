export default function TextBox({
  label,
  value,
  onChange,
  type = 'text',
  error,
  placeholder,
}: {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: 'text' | 'number' | 'date' | 'email';
  error?: string;
  placeholder?: string;
}) {
  const baseInputClass = "w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all shadow-sm";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      <input
        type={type}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={baseInputClass}
      />
      {error && <small className="text-red-500 ml-1 font-medium">{error}</small>}
    </div>
  );
}
