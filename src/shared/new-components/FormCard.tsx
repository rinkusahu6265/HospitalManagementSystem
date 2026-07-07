import type { ReactNode } from 'react';

export default function FormCard({
  title,
  subtitle,
  icon,
  headerAction,
  children,
}: {
  title?: string;
  subtitle?: string;
  icon?: string;
  headerAction?: ReactNode;
  children: ReactNode;
}) {
  const showHeader = title || subtitle || icon;
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      {showHeader && (
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            {icon && <i className={`pi pi-${icon}`} />}
            <div>
              {title && <h3 className="text-lg font-semibold">{title}</h3>}
              {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
            </div>
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
