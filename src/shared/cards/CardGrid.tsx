import { useState } from 'react'

export default function CardGrid<T extends Record<string, unknown>>({
  data,
  renderCard,
  searchable,
  searchFields,
}: {
  data: T[]
  renderCard: (item: T) => React.ReactNode
  searchable?: boolean
  searchFields?: string[]
}) {
  const [search, setSearch] = useState('')

  const filtered = searchable && searchFields
    ? data.filter((item) =>
      searchFields.some((field) => {
        const val = item[field]
        return val != null && String(val).toLowerCase().includes(search.toLowerCase())
      })
    )
    : data

  return (
    <div>
      {searchable && (
        <div className="relative mb-8 max-w-md">
          <i className="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white transition-all shadow-sm"
          />
        </div>
      )}
      <div className="flex flex-col gap-4">
        {filtered.map((item, i) => <div key={i} className="w-full">{renderCard(item)}</div>)}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <i className="pi pi-inbox text-4xl block mb-3" />
          <p className="text-lg font-medium">No records found</p>
        </div>
      )}
    </div>
  )
}
