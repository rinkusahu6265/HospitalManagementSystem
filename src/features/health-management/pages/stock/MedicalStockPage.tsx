import { useState } from 'react';
import { FormPage, FormCard } from '@/shared/new-components';
import { LinkButton } from '@/shared/components/buttons';
import { mockMedicalStock } from '@/features/health-management/data';

function isExpired(dateStr: string) {
  const today = new Date();
  const expiry = new Date(dateStr);
  return expiry < today;
}

export default function MedicalStockPage() {
  const [search, setSearch] = useState('');

  const filteredData = mockMedicalStock.filter((item) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      (item.saltName?.toLowerCase() || '').includes(s) ||
      (item.brandName?.toLowerCase() || '').includes(s) ||
      (item.companyName?.toLowerCase() || '').includes(s)
    );
  });

  return (
    <FormPage
      title="Medical Stock"
      description="Pharmacy inventory management"
      breadcrumbs={[
        { label: 'Home', url: '/' },
        { label: 'Health Management', url: '/health-management' },
        { label: 'Medical Stock' },
      ]}
      headerAction={
        <LinkButton to="/health-management/stock/add" variant="primary">
          Add Stock
        </LinkButton>
      }
    >
      <FormCard>
        <div className="relative mb-6 max-w-md">
          <i className="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            type="text"
            placeholder="Search stock..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white transition-all shadow-sm"
          />
        </div>

        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-sm text-slate-600 whitespace-nowrap">
            <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-700">
              <tr>
                <th className="px-4 py-3.5 font-semibold">Medicine</th>
                <th className="px-4 py-3.5 font-semibold">Batch No</th>
                <th className="px-4 py-3.5 font-semibold">Type</th>
                <th className="px-4 py-3.5 font-semibold">Expiry Date</th>
                <th className="px-4 py-3.5 font-semibold">Qty</th>
                <th className="px-4 py-3.5 font-semibold">Price</th>
                <th className="px-4 py-3.5 font-semibold">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.length > 0 ? (
                filteredData.map((item) => {
                  const expired = isExpired(item.expiryDate);
                  const badgeClass =
                    item.quantity === 0
                      ? 'bg-red-50 text-red-700 border-red-200'
                      : item.quantity < 50
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200';
                  return (
                    <tr key={item.stockId} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-100 transition-colors">
                            <i className="pi pi-box text-sm" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">{item.saltName}</p>
                            <p className="text-xs text-slate-500">{item.brandName}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-700">{item.batchNo}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200/50 uppercase tracking-wider">
                          {item.stockTypeName}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {expired ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-200">
                            <i className="pi pi-exclamation-triangle text-[10px]" />
                            {item.expiryDate}
                          </span>
                        ) : (
                          <span className="font-medium text-slate-700">{item.expiryDate}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${badgeClass}`}>
                          {item.quantity}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-700">
                        ${item.unitPrice.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <i className="pi pi-building text-slate-400 text-xs" />
                          {item.healthCenter}
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-slate-400">
                    <i className="pi pi-inbox text-3xl mb-3 block text-slate-300" />
                    <p className="text-sm font-medium">No medical stock found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </FormCard>
    </FormPage>
  );
}
