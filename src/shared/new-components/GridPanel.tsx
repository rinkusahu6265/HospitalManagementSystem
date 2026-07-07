import { useState } from 'react';
import type { ReactNode } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

export default function GridPanel({
  columns,
  data,
  searchable,
  searchFields,
}: {
  columns: { field: string; header: string; body?: (rowData: any) => ReactNode }[];
  data: any[];
  searchable?: boolean;
  searchFields?: string[];
}) {
  const [globalFilter, setGlobalFilter] = useState('');

  const filteredData = searchable && globalFilter && searchFields && searchFields.length > 0
    ? data.filter((item) =>
        searchFields.some((field) => {
          const value = item[field];
          return value != null && String(value).toLowerCase().includes(globalFilter.toLowerCase());
        })
      )
    : data;

  return (
    <div>
      {searchable && (
        <div className="flex justify-end mb-4">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search..."
            />
          </span>
        </div>
      )}
      <DataTable value={filteredData} tableStyle={{ minWidth: '50rem' }} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} emptyMessage="No records found.">
        {columns.map((col, i) => (
          <Column key={i} field={col.field} header={col.header} body={col.body} />
        ))}
      </DataTable>
    </div>
  );
}
