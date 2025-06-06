// import React from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import DataTable, { TableColumn, TableRow } from './DataTable';
// // import DataTable, { TableColumn, TableRow } from './DataTable';

// // Sample data matching the design
// const tableData: TableRow[] = [
//   {
//     id: 1,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'abc pvt ltd',
//       avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Not Delivered'
//   },
//   {
//     id: 2,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'xyz pvt ltd',
//       avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Delivered'
//   },
//   {
//     id: 3,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'xyz pvt ltd',
//       avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Delivered'
//   },
//   {
//     id: 4,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'xyz pvt ltd',
//       avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Delivered'
//   },
//   {
//     id: 5,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'xyz pvt ltd',
//       avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Not Delivered'
//   },
//   {
//     id: 6,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'xyz pvt ltd',
//       avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Delivered'
//   },
//   {
//     id: 7,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'xyz pvt ltd',
//       avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Delivered'
//   },
//   {
//     id: 8,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'xyz pvt ltd',
//       avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Not Delivered'
//   },
//   {
//     id: 9,
//     orderNo: '11013',
//     vendor: {
//       name: 'Ester Howard',
//       company: 'xyz pvt ltd',
//       avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
//     },
//     category: 'Electronics',
//     arrivalDate: '21/02/2025',
//     qtys: '100 pcs',
//     type: 'Bea Bag',
//     expectedDate: '22/2/2025',
//     deliveryStatus: 'Delivered'
//   }
// ];

// const columns: TableColumn[] = [
//   { key: 'orderNo', label: 'Order No.', sortable: true, width: '120px' },
//   { key: 'vendor', label: 'Vendor', sortable: true, width: '200px' },
//   { key: 'category', label: 'Category', sortable: true, width: '120px' },
//   { key: 'arrivalDate', label: 'Arrival Date', sortable: true, width: '130px' },
//   { key: 'qtys', label: 'Qtys', sortable: true, width: '100px' },
//   { key: 'type', label: 'Type', sortable: true, width: '120px' },
//   { key: 'expectedDate', label: 'Expected Date', sortable: true, width: '130px' },
//   { key: 'deliveryStatus', label: 'Delivery Status', sortable: true, width: '140px' },
//   { key: 'action', label: 'Action', width: '80px' }
// ];

// const ReportsTable = () => {
//   const handleRowAction = (action: string, row: TableRow) => {
//     console.log(`${action} action for row:`, row);
//     // Handle actions here
//   };

//   return (
//     <Card className="mt-8">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
//         <CardTitle className="text-lg font-medium flex items-center gap-2">
//           <div className="rounded bg-gray-100 p-1">
//             <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
//               <polyline points="14,2 14,8 20,8"/>
//               <line x1="16" y1="13" x2="8" y2="13"/>
//               <line x1="16" y1="17" x2="8" y2="17"/>
//               <polyline points="10,9 9,9 8,9"/>
//             </svg>
//           </div>
//           Reports and Monitoring
//         </CardTitle>
        
//         <div className="flex items-center gap-2">
//           <Button variant="outline" size="sm" className="text-xs">
//             Stock In
//           </Button>
//           <Button variant="outline" size="sm" className="text-xs">
//             Stock Out
//           </Button>
//           <Button variant="outline" size="sm" className="text-xs">
//             Low Stock Alert
//           </Button>
//           <Button variant="outline" size="sm" className="text-xs">
//             Stock Adjustment
//           </Button>
//         </div>
//       </CardHeader>
      
//       <CardContent className="p-0">
//         <DataTable
//           columns={columns}
//           data={tableData}
//           itemsPerPage={10}
//           onRowAction={handleRowAction}
//         />
//       </CardContent>
//     </Card>
//   );
// };

// export default ReportsTable;







import  { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DataTable, { TableColumn, TableRow } from './DataTable';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import {  MoreHorizontal } from 'lucide-react';
import { Badge } from '../ui/badge';

const tableData: TableRow[] = [
  {
    id: 1,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'abc pvt ltd',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Not Delivered'
  },
  {
    id: 2,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'xyz pvt ltd',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Delivered'
  },
  {
    id: 3,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'xyz pvt ltd',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Delivered'
  },
  {
    id: 4,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'xyz pvt ltd',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Delivered'
  },
  {
    id: 5,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'xyz pvt ltd',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Not Delivered'
  },
  {
    id: 6,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'xyz pvt ltd',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Delivered'
  },
  {
    id: 7,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'xyz pvt ltd',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Delivered'
  },
  {
    id: 8,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'xyz pvt ltd',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Not Delivered'
  },
  {
    id: 9,
    orderNo: '11013',
    vendor: {
      name: 'Ester Howard',
      company: 'xyz pvt ltd',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    category: 'Electronics',
    arrivalDate: '21/02/2025',
    qtys: '100 pcs',
    type: 'Bea Bag',
    expectedDate: '22/2/2025',
    deliveryStatus: 'Delivered'
  }
];



const columns: TableColumn[] = [
  { key: 'orderNo', label: 'Order No.', sortable: true, width: '120px' },
  { 
    key: 'vendor', 
    label: 'Vendor', 
    sortable: true, 
    width: '200px',
    render: (row) => (
      <div className="flex items-center gap-3">
        <img
          src={row.vendor.avatar}
          alt={row.vendor.name}
          className="h-8 w-8 rounded-full object-cover"
        />
        <div>
          <div className="font-medium text-gray-900">{row.vendor.name}</div>
          <div className="text-sm text-gray-500">{row.vendor.company}</div>
        </div>
      </div>
    )
  },
  { key: 'category', label: 'Category', sortable: true, width: '120px' },
  { key: 'arrivalDate', label: 'Arrival Date', sortable: true, width: '130px' },
  { key: 'qtys', label: 'Qtys', sortable: true, width: '100px' },
  { key: 'type', label: 'Type', sortable: true, width: '120px' },
  { key: 'expectedDate', label: 'Expected Date', sortable: true, width: '130px' },
  { 
    key: 'deliveryStatus', 
    label: 'Delivery Status', 
    sortable: true, 
    width: '140px',
    render: (row) => {
      const statusVariant = 
        row.deliveryStatus === 'Delivered' ? 'default' : 
        row.deliveryStatus === 'Not Delivered' ? 'destructive' : 
        'secondary';
      return (
        <>
        <Badge
         variant={statusVariant}
          className="font-medium ">
          {row.deliveryStatus}
        </Badge>
        </>
       
      );
    }
  },
  { 
    key: 'action', 
    label: 'Action', 
    width: '80px',
    render: (row) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='bg-white shadow-lg p-2 cursor-pointer'>
          <DropdownMenuItem className='outline-none text-sm hover:bg-[#4ea350] hover:text-white rounded px-2 py-1 ' onClick={() => console.log('view', row)}>
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem className='outline-none text-sm hover:bg-[#4ea350] hover:text-white rounded px-2 py-1 ' onClick={() => console.log('edit', row)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className='outline-none text-sm hover:bg-[#d85c4e] hover:text-white rounded px-2 py-1 ' onClick={() => console.log('delete', row)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
];

const ReportsTable = () => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  console.log(selectedRows)

  const handleSelectionChange = (selectedIds: (string | number)[]) => {
    setSelectedRows(selectedIds);
    console.log('Selected rows:', selectedIds);
  };

  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          {/* ... (title remains same) ... */}
        </CardTitle>
        
        <div className="flex items-center gap-2">
          {/* ... (buttons remain same) ... */}
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <DataTable
          columns={columns}
          data={tableData}
          itemsPerPage={10}
          selectable={true}
          onSelectionChange={handleSelectionChange}
        />
      </CardContent>
    </Card>
  );
};

export default ReportsTable;