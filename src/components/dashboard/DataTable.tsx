// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// export interface TableColumn {
//   key: string;
//   label: string;
//   sortable?: boolean;
//   width?: string;
// }

// export interface TableRow {
//   id: string | number;
//   [key: string]: any;
// }

// interface DataTableProps {
//   columns: TableColumn[];
//   data: TableRow[];
//   itemsPerPage?: number;
//   showPagination?: boolean;
//   onRowAction?: (action: string, row: TableRow) => void;
// }

// const DataTable: React.FC<DataTableProps> = ({
//   columns,
//   data,
//   itemsPerPage = 10,
//   showPagination = true,
//   onRowAction,
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState<{
//     key: string;
//     direction: 'asc' | 'desc';
//   } | null>(null);

//   // Sort data
//   const sortedData = React.useMemo(() => {
//     if (!sortConfig) return data;

//     return [...data].sort((a, b) => {
//       const aValue = a[sortConfig.key];
//       const bValue = b[sortConfig.key];

//       if (aValue < bValue) {
//         return sortConfig.direction === 'asc' ? -1 : 1;
//       }
//       if (aValue > bValue) {
//         return sortConfig.direction === 'asc' ? 1 : -1;
//       }
//       return 0;
//     });
//   }, [data, sortConfig]);

//   // Paginate data
//   const totalPages = Math.ceil(sortedData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

//   const handleSort = (key: string) => {
//     setSortConfig((current) => {
//       if (current?.key === key) {
//         return {
//           key,
//           direction: current.direction === 'asc' ? 'desc' : 'asc',
//         };
//       }
//       return { key, direction: 'asc' };
//     });
//   };

//   const renderCellContent = (row: TableRow, column: TableColumn) => {
//     const value = row[column.key];

//     // Handle special cases
//     switch (column.key) {
//       case 'vendor':
//         return (
//           <div className="flex items-center gap-3">
//             <img
//               src={value.avatar}
//               alt={value.name}
//               className="h-8 w-8 rounded-full object-cover"
//             />
//             <div>
//               <div className="font-medium text-gray-900">{value.name}</div>
//               <div className="text-sm text-gray-500">{value.company}</div>
//             </div>
//           </div>
//         );

//       case 'deliveryStatus':
//         const statusVariant = 
//           value === 'Delivered' ? 'success' : 
//           value === 'Not Delivered' ? 'error' : 
//           'warning';
//         return (
//           <Badge
//         //    variant={statusVariant}
//             className="font-medium">
//             {value}
//           </Badge>
//         );

//       case 'action':
//         return (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="h-8 w-8 p-0">
//                 <MoreHorizontal className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem onClick={() => onRowAction?.('view', row)}>
//                 View Details
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => onRowAction?.('edit', row)}>
//                 Edit
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => onRowAction?.('delete', row)}>
//                 Delete
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         );

//       default:
//         return <span className="text-gray-900">{value}</span>;
//     }
//   };

//   const generatePageNumbers = () => {
//     const pages = [];
//     const maxVisiblePages = 5;
    
//     if (totalPages <= maxVisiblePages) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       if (currentPage <= 3) {
//         pages.push(1, 2, 3, 4, '...', totalPages);
//       } else if (currentPage >= totalPages - 2) {
//         pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
//       }
//     }
    
//     return pages;
//   };

//   return (
//     <div className="w-full">
//       {/* Table */}
//       <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               {columns.map((column) => (
//                 <th
//                   key={column.key}
//                   className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 ${
//                     column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
//                   }`}
//                   style={{ width: column.width }}
//                   onClick={() => column.sortable && handleSort(column.key)}
//                 >
//                   <div className="flex items-center gap-1">
//                     {column.label}
//                     {column.sortable && sortConfig?.key === column.key && (
//                       <span className="text-gray-400">
//                         {sortConfig.direction === 'asc' ? '↑' : '↓'}
//                       </span>
//                     )}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 bg-white">
//             {paginatedData.map((row, index) => (
//               <tr key={row.id} className="hover:bg-gray-50">
//                 {columns.map((column) => (
//                   <td key={column.key} className="px-6 py-4 whitespace-nowrap">
//                     {renderCellContent(row, column)}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {showPagination && (
//         <div className="flex items-center justify-between px-6 py-4">
//           <div className="text-sm text-gray-500">
//             {startIndex + 1} - {Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length} entries
//           </div>
          
//           <div className="flex items-center gap-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//               disabled={currentPage === 1}
//               className="flex items-center gap-1"
//             >
//               <ChevronLeft className="h-4 w-4" />
//               Prev
//             </Button>
            
//             <div className="flex items-center gap-1">
//               {generatePageNumbers().map((page, index) => (
//                 <React.Fragment key={index}>
//                   {page === '...' ? (
//                     <span className="px-2 py-1 text-gray-500">...</span>
//                   ) : (
//                     <Button
//                       variant={currentPage === page ? "default" : "outline"}
//                       size="sm"
//                       onClick={() => setCurrentPage(page as number)}
//                       className="h-8 w-8 p-0"
//                     >
//                       {page}
//                     </Button>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
            
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//               disabled={currentPage === totalPages}
//               className="flex items-center gap-1"
//             >
//               Next
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataTable;



















import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (row: TableRow) => React.ReactNode;
}

export interface TableRow {
  id: string | number;
  [key: string]: any;
}

interface DataTableProps {
  columns: TableColumn[];
  data: TableRow[];
  itemsPerPage?: number;
  showPagination?: boolean;
  onRowAction?: (action: string, row: TableRow) => void;
  rowActions?: { label: string; value: string }[];
  selectable?: boolean;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  itemsPerPage = 10,
  showPagination = true,
//   onRowAction,
//   rowActions = [
//     { label: 'View Details', value: 'view' },
//     { label: 'Edit', value: 'edit' },
//     { label: 'Delete', value: 'delete' },
//   ],
  selectable = false,
  onSelectionChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = useCallback((key: string) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return {
          key,
          direction: current.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  }, []);

  const toggleRowSelection = useCallback(
    (id: string | number) => {
      setSelectedRows((prev) => {
        const newSelection = prev.includes(id)
          ? prev.filter((rowId) => rowId !== id)
          : [...prev, id];
        
        onSelectionChange?.(newSelection);
        return newSelection;
      });
    },
    [onSelectionChange]
  );

  const toggleAllSelection = useCallback(() => {
    if (selectedRows.length === paginatedData.length) {
      onSelectionChange?.([]);
      setSelectedRows([]);
    } else {
      const allIds = paginatedData.map((row) => row.id);
      onSelectionChange?.(allIds);
      setSelectedRows(allIds);
    }
  }, [paginatedData, selectedRows, onSelectionChange]);

  const generatePageNumbers = useCallback(() => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  }, [currentPage, totalPages]);

  const isAllSelected = 
    paginatedData.length > 0 && 
    selectedRows.length === paginatedData.length;
//   const isIndeterminate = 
//     selectedRows.length > 0 && 
//     selectedRows.length < paginatedData.length;

  return (
    <div className="w-full">
      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {selectable && (
                <th className="px-6 py-3 text-left w-12">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={toggleAllSelection}
                    // indeterminate={isIndeterminate}
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 ${
                    column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                  }`}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-1">
                    {column.label}
                    {column.sortable && sortConfig?.key === column.key && (
                      <span className="text-gray-400">
                        {sortConfig.direction === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {paginatedData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {selectable && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onCheckedChange={() => toggleRowSelection(row.id)}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                    {column.render 
                      ? column.render(row) 
                      : <span className="text-gray-900">{row[column.key]}</span>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {showPagination && (
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-sm text-gray-500">
            {startIndex + 1} - {Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length} entries
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </Button>
            
            <div className="flex items-center gap-1">
              {generatePageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === '...' ? (
                    <span className="px-2 py-1 text-gray-500">...</span>
                  ) : (
                    <Button
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page as number)}
                      className="h-8 w-8 p-0"
                    >
                      {page}
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;