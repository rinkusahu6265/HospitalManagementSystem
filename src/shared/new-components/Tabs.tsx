import { useState } from 'react';
import type { ReactNode } from 'react';

export default function Tabs({ tabs }: { tabs: { title: string; content: ReactNode }[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex gap-0 border-b">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === i
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}
