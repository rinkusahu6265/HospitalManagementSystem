import type { ReactNode } from 'react';

const colMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

const gapMap: Record<number, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
};

export default function FormGrid({ columns = 2, gap = 6, children }: { columns?: number; gap?: number; children: ReactNode }) {
  return (
    <div className={`grid grid-cols-1 ${colMap[columns] || 'md:grid-cols-2'} ${gapMap[gap] || 'gap-6'}`}>
      {children}
    </div>
  );
}
