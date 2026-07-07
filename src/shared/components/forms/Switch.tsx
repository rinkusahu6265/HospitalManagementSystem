import { InputSwitch } from 'primereact/inputswitch';

export default function Switch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <InputSwitch
        checked={checked}
        onChange={(e) => onChange(e.value)}
      />
      <label className="text-sm font-medium">{label}</label>
    </div>
  );
}
