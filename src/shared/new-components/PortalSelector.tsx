import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

function LinkButton({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`${className} w-full block`}
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}

export default function PortalSelector({ tiles }: {
  tiles: { icon: string; title: string; description: string; color: string; to: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tiles.map((tile, i) => (
        <LinkButton
          key={i}
          to={tile.to}
          className={`bg-white rounded-lg shadow-sm border p-6 text-left hover:shadow-md transition-shadow border-l-4 ${tile.color}`}
        >
          <i className={`pi pi-${tile.icon} text-2xl mb-3 block`} />
          <h3 className="text-lg font-semibold mb-1">{tile.title}</h3>
          <p className="text-sm text-gray-500">{tile.description}</p>
        </LinkButton>
      ))}
    </div>
  );
}
