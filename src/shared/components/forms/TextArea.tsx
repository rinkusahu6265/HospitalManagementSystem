export default function TextArea({
  label,
  value,
  onChange,
  rows = 3,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  error?: string;
  placeholder?: string;
}) {
  const baseInputClass = "w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 focus:bg-white transition-all shadow-sm resize-y";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      <textarea
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className={baseInputClass}
      />
      {error && <small className="text-red-500 ml-1 font-medium">{error}</small>}
    </div>
  );
}
