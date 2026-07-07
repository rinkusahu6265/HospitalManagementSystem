import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function FormPage({
  title,
  description,
  breadcrumbs,
  headerAction,
  children,
}: {
  title: string;
  description?: string;
  breadcrumbs: { label: string; url?: string }[];
  headerAction?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="p-6">
      <nav className="text-sm text-gray-500 mb-4 flex items-center flex-wrap">
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center">
            {i > 0 && <span className="mx-2 text-slate-300">&gt;</span>}
            {crumb.url ? (
              <Link to={crumb.url} className="text-teal-600 hover:underline">{crumb.label}</Link>
            ) : (
              <span className="text-gray-700">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {description && <p className="text-gray-500">{description}</p>}
        </div>
        {headerAction && <div>{headerAction}</div>}
      </div>
      {children}
    </div>
  );
}
