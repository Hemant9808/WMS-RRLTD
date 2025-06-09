import React from 'react';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import DataTable, { TableColumn, TableRow } from '@/components/dashboard/DataTable';

// Sample notes data
const notesData: TableRow[] = [
  {
    id: 1,
    dateTime: '2025-05-28 21:05',
    noteTitle: '',
    noteDetail: '',
  },
  {
    id: 2,
    dateTime: '2025-05-28 21:05',
    noteTitle: '',
    noteDetail: '',
  },
];

const columns: TableColumn[] = [
  { 
    key: 'dateTime', 
    label: 'Date & Time', 
    sortable: true, 
    width: '200px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.dateTime}</span>
    )
  },
  { 
    key: 'noteTitle', 
    label: 'Note Title', 
    sortable: true, 
    width: '200px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.noteTitle || '-'}</span>
    )
  },
  { 
    key: 'noteDetail', 
    label: 'Note Detail', 
    sortable: true, 
    width: '300px',
    render: (row) => (
      <span className="text-sm text-gray-900">{row.noteDetail || '-'}</span>
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

const VendorNotes = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700">Notes</h4>
        <Button className="bg-[#7ba83c] hover:bg-[#6c973a] text-white">
          + Add Note
        </Button>
      </div>

      {/* Notes Table with blue border */}
      <div className="border-2 border-blue-500 rounded-lg overflow-hidden">
        <DataTable
          columns={columns}
          data={notesData}
          itemsPerPage={10}
          showPagination={false}
        />
      </div>
    </div>
  );
};

export default VendorNotes;