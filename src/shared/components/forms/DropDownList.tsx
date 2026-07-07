export default function DropDownList({
  label,
  dataSource,
  value,
  onChange,
  textField = 'name',
  valueField = 'value',
  placeholder,
  error,
}: {
  label: string;
  dataSource: any[];
  value: any;
  onChange: (value: any) => void;
  textField?: string;
  valueField?: string;
  placeholder?: string;
  error?: string;
}) {
  const baseSelectClass = "w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all shadow-sm appearance-none";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseSelectClass}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {dataSource.map((item, index) => (
            <option key={index} value={item[valueField]}>
              {item[textField]}
            </option>
          ))}
        </select>
        <i className="pi pi-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
      </div>
      {error && <small className="text-red-500 ml-1 font-medium">{error}</small>}
    </div>
  );
}
