import { Button } from '@/components/ui/button';
import { MoreHorizontal, Download, Upload } from 'lucide-react';
import DataTable, { TableColumn, TableRow } from '@/components/dashboard/DataTable';

// Sample stock in data
const stockInData: TableRow[] = [
  {
    id: 1,
    orderNo: '5456',
    productName: '',
    category: '',
    unitType: '',
    arrivalDate: '',
    expectedDate: '',
    deliveryDate: '',
  },
  {
    id: 2,
    orderNo: '54562',
    productName: '',
    category: '',
    unitType: '',
    arrivalDate: '',
    expectedDate: '',
    deliveryDate: '',
  },
];

const columns: TableColumn[] = [
  { 
    key: 'orderNo', 
    label: 'Order No.', 
    sortable: true, 
    width: '120px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.orderNo}</span>
    )
  },
  { 
    key: 'productName', 
    label: 'Product Name', 
    sortable: true, 
    width: '150px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.productName || '-'}</span>
    )
  },
  { 
    key: 'category', 
    label: 'Category', 
    sortable: true, 
    width: '120px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.category || '-'}</span>
    )
  },
  { 
    key: 'unitType', 
    label: 'Unit Type', 
    sortable: true, 
    width: '120px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.unitType || '-'}</span>
    )
  },
  { 
    key: 'arrivalDate', 
    label: 'Arrival Date', 
    sortable: true, 
    width: '130px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.arrivalDate || '-'}</span>
    )
  },
  { 
    key: 'expectedDate', 
    label: 'Expected Date', 
    sortable: true, 
    width: '130px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.expectedDate || '-'}</span>
    )
  },
  { 
    key: 'deliveryDate', 
    label: 'Delivery Date', 
    sortable: true, 
    width: '130px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.deliveryDate || '-'}</span>
    )
  },
  { 
    key: 'action', 
    label: 'Action', 
    width: '80px',
    render: () => (
      <Button variant="ghost" className="h-8 w-8 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    )
  }
];

const VendorStockIn = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">Stock In</h4>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
            <Download className="h-3 w-3 mr-1" />
            Import
          </Button>
          <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
            <Upload className="h-3 w-3 mr-1" />
            Export
          </Button>
          <Button className="bg-[#7ba83c] hover:bg-[#6c973a] text-white h-8 px-3 text-xs">
            + Add Stock
          </Button>
        </div>
      </div>

      {/* Stock In Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Blue header bar */}
        <div className="bg-blue-500 h-2 rounded-t-lg"></div>
        <DataTable
          columns={columns}
          data={stockInData}
          itemsPerPage={10}
          showPagination={false}
        />
      </div>
    </div>
  );
};

export default VendorStockIn;