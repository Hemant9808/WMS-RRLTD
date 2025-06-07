
const employeeData: TableRow[] = [
  {
    id: 1,
    employeeId: '11013',
    name: 'Ester Howard',
    designation: 'Supervisor',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Inactive',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
  },
  {
    id: 2,
    employeeId: '11013',
    name: 'Aster Howard',
    designation: 'Supervisor',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    initial: 'A'
  },
  {
    id: 3,
    employeeId: '11013',
    name: 'Monika Howard',
    designation: 'Manager',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Active',
    initial: 'M'
  },
  {
    id: 4,
    employeeId: '11013',
    name: 'Harry Howard',
    designation: 'Store Keeper',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Active',
    initial: 'H'
  },
  {
    id: 5,
    employeeId: '11013',
    name: 'Ester Howard',
    designation: 'Supervisor',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Inactive',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
  },
  {
    id: 6,
    employeeId: '11013',
    name: 'Ester Howard',
    designation: 'Manager',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
  },
  {
    id: 7,
    employeeId: '11013',
    name: 'Benita',
    designation: 'Store Keeper',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Active',
    initial: 'B'
  },
  {
    id: 8,
    employeeId: '11013',
    name: 'Ester Howard',
    designation: 'Supervisor',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Inactive',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
  },
  {
    id: 9,
    employeeId: '11013',
    name: 'Ester Howard',
    designation: 'Manager',
    email: 'Abhishek.Gupta@gmail.com',
    contactNo: '9876543210',
    role: 'Select',
    status: 'Active',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
  }
];

const columns: TableColumn[] = [
  { 
    key: 'employeeId', 
    label: 'ID', 
    sortable: true, 
    width: '80px',
    render: (row) => (
      <div className="flex items-center gap-2">

        <span className="text-gray-500 text-[0.8rem] font-medium">{row.employeeId}</span>
      </div>
    )
  },
  { 
    key: 'name', 
    label: 'Name', 
    sortable: true, 
    width: '200px',
    render: (row) => (
      <div className="flex items-center gap-3">
        {row.avatar ? (
          <img
            src={row.avatar}
            alt={row.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <div className="h-8 text-xs w-8 rounded-full bg-gray-200 flex items-center justify-center   text-gray-500">
            {row.initial || row.name.charAt(0)}
          </div>
        )}
        <div>
          <div className=" text-[0.8rem] text-gray-500">{row.name}</div>
          <div className="text-xs text-gray-500">{row.designation}</div>
        </div>
      </div>
    )
  },
  { key: 'email', label: 'Email ID', sortable: true, width: '200px' },
  { key: 'contactNo', label: 'Contact No.', sortable: true, width: '130px' },
  { 
    key: 'role', 
    label: 'Role', 
    sortable: true, 
    width: '120px',
    render: (row) => (
      <Select defaultValue={row.role}>
        <SelectTrigger className="w-full h-8 text-sm border-gray-300">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select">Select</SelectItem>
          <SelectItem value="Admin">Admin</SelectItem>
          <SelectItem value="Manager">Manager</SelectItem>
          <SelectItem value="Employee">Employee</SelectItem>
        </SelectContent>
      </Select>
    )
  },
  { 
    key: 'status', 
    label: 'Status', 
    sortable: true, 
    width: '100px',
    render: (row) => (
      <Badge
        variant={row.status === 'Active' ? 'default' : 'destructive'}
        className={`font-medium ${
          row.status === 'Active' 
            ? 'bg-green-100 text-green-800 hover:bg-green-100' 
            : 'bg-red-100 text-red-800 hover:bg-red-100'
        }`}
      >
        {row.status}
      </Badge>
    )
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
        <DropdownMenuContent align="end" className="bg-white shadow-lg p-2 cursor-pointer">
          <DropdownMenuItem className="outline-none text-sm hover:bg-[#4ea350] hover:text-white rounded px-2 py-1" onClick={() => console.log('view', row)}>
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem className="outline-none text-sm hover:bg-[#4ea350] hover:text-white rounded px-2 py-1" onClick={() => console.log('edit', row)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="outline-none text-sm hover:bg-[#d85c4e] hover:text-white rounded px-2 py-1" onClick={() => console.log('delete', row)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
];





import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, Download, Upload, Filter, MoreHorizontal, X, ChevronUp, ChevronDown } from 'lucide-react';
import DataTable, { TableColumn, TableRow } from './DataTable';
import AddEmployeeModal from '../employee/AddEmployeeModel'
import ImportProductsModal from '../employee/ImportProductModel';
import RoleConfirmModal from '../employee/RoleConfirmModel';

const EmployeeTable = () => {
 const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [employeeFilter, setEmployeeFilter] = useState('All');
  const [designationFilter, setDesignationFilter] = useState('All');
  const [roleFilter, setRoleFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('Active');
  const [actionFilter, setActionFilter] = useState('');
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showImportProducts, setShowImportProducts] = useState(false);
  const [roleConfirmModalOpen, setRoleConfirmModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const isMobile = useMediaQuery('(max-width: 768px)');
  // const isTablet = useMediaQuery('(max-width: 1024px)');
 console.log(selectedRows,actionFilter);
  const handleSelectionChange = (selectedIds: (string | number)[]) => {
    setSelectedRows(selectedIds);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setEmployeeFilter('All');
    setDesignationFilter('All');
    setRoleFilter('All');
    setStatusFilter('Active');
    setActionFilter('');
  };

    const filteredData = employeeData.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || employee.status === statusFilter;
    const matchesDesignation = designationFilter === 'All' || employee.designation === designationFilter;
    const matchesRole = roleFilter === 'All' || employee.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesDesignation && matchesRole;
  });

  return (





 <div className="space-y-6 bg-white border border-gray-200 p-4 md:p-6 rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Employee</h1>
          <p className="text-sm text-gray-500 mt-1">View and manage employee</p>
        </div>
        <Button 
          className="bg-[#7ba83c] hover:bg-[#6c973a] text-white w-full md:w-auto"
          onClick={() => setShowAddEmployee(true)}
        >
          + Add Employee
        </Button>
      </div>

      <div className="space-y-4 border border-gray-200 p-3 md:p-4 rounded-lg">
        {/* Search and Filter Controls */}
        <div className="flex flex-col gap-4">
          {/* Main Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-3">

           {isMobile && <div className="relative flex-1 max-w-[100%]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-9 w-full"
              />
            </div>}

            {isMobile && (
              <Button 
                variant="outline" 
                size="sm" 
                className="h-9 px-3 text-sm bg-[#7ba83c] text-white hover:bg-[#6c973a] flex items-center gap-1"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            )}
          </div>

          {/* Additional Filters - shown on desktop or when expanded on mobile */}
         
            {(showFilters || !isMobile) && <div className="grid grid-cols-2  md:flex md:flex-wrap items-center gap-2 md:gap-4">
              

             {!isMobile && <div className="relative flex-1 max-w-[15rem]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-9 w-full"
              />
            </div>}


              {/* Employee Filter */}
              <div className="flex items-center gap-2  flex-col md:flex-row text-left   border rounded-lg p-1.5 px-3">
                <span className="text-sm text-gray-500 ">Employee</span>
                <Select value={employeeFilter} onValueChange={setEmployeeFilter}>
                  <SelectTrigger className="w-full md:w-24 h-7 text-sm text-gray-500">
                    <SelectValue placeholder="Employee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Designation Filter */}
              <div className="flex items-center gap-2 border rounded-lg p-1.5 px-3">
                <span className="text-sm text-gray-500 hidden md:inline">Designation</span>
                <Select value={designationFilter} onValueChange={setDesignationFilter}>
                  <SelectTrigger className="w-full md:w-28 h-7 text-sm text-gray-500">
                    <SelectValue placeholder="Designation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="Supervisor">Supervisor</SelectItem>
                    <SelectItem value="Store Keeper">Store Keeper</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Role Filter */}
              <div className="flex items-center gap-2 border rounded-lg p-1.5 px-3">
                <span className="text-sm text-gray-500 hidden md:inline">Role</span>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-full md:w-24 h-7 text-sm text-gray-500">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="Employee">Employee</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2 border rounded-lg p-1.5 px-3">
                <span className="text-sm text-gray-500 hidden md:inline">Status</span>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-24 h-7 text-sm text-gray-500">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

    
                <div className="col-span-2 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="h-9 px-3 text-sm text-gray-500"
                  >
                    Clear
                    <X className="h-4 w-4 ml-1" />
                  </Button>

                  <Button 
                    onClick={() => setShowImportProducts(true)} 
                    variant="outline" 
                    size="sm" 
                    className="h-9 px-3 text-sm text-gray-500 flex-1"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Import
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 px-3 text-sm text-gray-500 flex-1">
                    <Upload className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                </div>
            
            </div>}
          
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
          <DataTable
            columns={columns}
            data={filteredData}
            itemsPerPage={10}
            selectable={true}
            onSelectionChange={handleSelectionChange}
            // responsive={isMobile || isTablet}
          />
        </div>
      </div>

      {/* Modals */}
      {showAddEmployee && (
        <div 
          className={`
    fixed inset-0 md:inset-auto md:absolute md:rounded-lg
    md:max-h-[95%] md:top-0 md:right-0 bg-white z-50 shadow-lg p-4
    w-full md:w-[30rem] md:m-4
    overflow-y-auto custom-scrollbar
  `}
        // className={`fixed inset-0 md:inset-auto md:absolute md:rounded-lg md:max-h-[95%] md:overflow-y-auto md:top-0 md:right-0 bg-white z-50 shadow-lg p-4 w-full md:w-[30rem] md:m-4`}
        >
          <AddEmployeeModal
            open={showAddEmployee}
            onOpenChange={setShowAddEmployee}
          />
        </div>
      )}
      
      <ImportProductsModal
        open={showImportProducts}
        onOpenChange={setShowImportProducts}
      />
      
      <RoleConfirmModal
        open={roleConfirmModalOpen}
        onOpenChange={setRoleConfirmModalOpen}
      />
    </div>
  );
};

export default EmployeeTable;

// Add this hook to your hooks folder (if you don't have it already)
// hooks/use-media-query.ts
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}