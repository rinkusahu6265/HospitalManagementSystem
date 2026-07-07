const variantStyles: Record<string, { bg: string; text: string; dot: string }> = {
  approved: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
  pending: { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' },
  neutral: { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500' },
  rejected: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
};

export default function StatusBadge({ variant, label }: { variant: 'approved' | 'pending' | 'neutral' | 'rejected'; label: string }) {
  const styles = variantStyles[variant];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.bg} ${styles.text}`}>
      <span className={`w-2 h-2 rounded-full inline-block mr-1 ${styles.dot}`} />
      {label}
    </span>
  );
}
