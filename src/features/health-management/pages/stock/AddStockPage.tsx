import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormPage, FormCard, FormGrid } from '@/shared/new-components';
import { TextBox, DropDownList } from '@/shared/components/forms';
import { Button, LinkButton } from '@/shared/components/buttons';
import { mockMedicineSalts, mockBrands, mockCompanies, mockStockTypes } from '@/features/health-management/data';

export default function AddStockPage() {
  const navigate = useNavigate();

  const [medicineSalt, setMedicineSalt] = useState('');
  const [brand, setBrand] = useState('');
  const [company, setCompany] = useState('');
  const [stockType, setStockType] = useState('');
  const [batchNo, setBatchNo] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [healthCenter, setHealthCenter] = useState('');

  const handleSave = () => {
    navigate('/health-management/stock');
  };

  return (
    <FormPage
      title="Add Stock"
      description="Add new medicine to inventory"
      breadcrumbs={[
        { label: 'Health Management', url: '/health-management' },
        { label: 'Medical Stock', url: '/health-management/stock' },
        { label: 'Add Stock' },
      ]}
    >
      <FormCard title="Stock Information">
        <FormGrid columns={2}>
          <DropDownList
            label="Medicine Salt"
            dataSource={mockMedicineSalts}
            textField="saltName"
            valueField="saltName"
            value={medicineSalt}
            onChange={setMedicineSalt}
          />
          <DropDownList
            label="Brand"
            dataSource={mockBrands}
            textField="brandName"
            valueField="brandName"
            value={brand}
            onChange={setBrand}
          />
          <DropDownList
            label="Company"
            dataSource={mockCompanies}
            textField="companyName"
            valueField="companyName"
            value={company}
            onChange={setCompany}
          />
          <DropDownList
            label="Stock Type"
            dataSource={mockStockTypes}
            textField="stockTypeName"
            valueField="stockTypeName"
            value={stockType}
            onChange={setStockType}
          />
          <TextBox label="Batch No" type="text" value={batchNo} onChange={setBatchNo} />
          <TextBox label="Expiry Date" type="date" value={expiryDate} onChange={setExpiryDate} />
          <TextBox label="Quantity" type="number" value={quantity} onChange={setQuantity} />
          <TextBox label="Unit Price" type="number" value={unitPrice} onChange={setUnitPrice} />
          <TextBox label="Health Center" type="text" value={healthCenter} onChange={setHealthCenter} />
        </FormGrid>
        <div className="flex justify-end gap-2 mt-6">
          <LinkButton variant="outlined" to="/health-management/stock">Cancel</LinkButton>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </div>
      </FormCard>
    </FormPage>
  );
}
