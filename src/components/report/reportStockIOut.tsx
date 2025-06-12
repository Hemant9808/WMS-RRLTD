const pickingData = [
  {
    id: 1,
    orderId: "11001",
    productName: "Bale Bag",
    prevStock: 100,
    stockOut: 50,
    currentStock: 50,
    driverName: "Amit",
    driverDetail: "9876543210",
    loadingDate: "22/02/2025",
    status: "Picked",
  },
  {
    id: 2,
    orderId: "11002",
    productName: "Box",
    prevStock: 200,
    stockOut: 100,
    currentStock: 100,
    driverName: "Ramesh",
    driverDetail: "9876543211",
    loadingDate: "21/02/2025",
    status: "Pending",
  },
  {
    id: 3,
    orderId: "11003",
    productName: "Packet",
    prevStock: 150,
    stockOut: 50,
    currentStock: 100,
    driverName: "Suresh",
    driverDetail: "9876543212",
    loadingDate: "21/02/2025",
    status: "Picked",
  },
  {
    id: 4,
    orderId: "11004",
    productName: "Crate",
    prevStock: 80,
    stockOut: 30,
    currentStock: 50,
    driverName: "Ravi",
    driverDetail: "9876543213",
    loadingDate: "22/02/2025",
    status: "Picked",
  },
  {
    id: 5,
    orderId: "11005",
    productName: "Box",
    prevStock: 60,
    stockOut: 20,
    currentStock: 40,
    driverName: "Arjun",
    driverDetail: "9876543214",
    loadingDate: "20/02/2025",
    status: "Pending",
  },
  {
    id: 6,
    orderId: "11006",
    productName: "Packet",
    prevStock: 100,
    stockOut: 50,
    currentStock: 50,
    driverName: "Rohit",
    driverDetail: "9876543215",
    loadingDate: "22/02/2025",
    status: "Picked",
  },
  {
    id: 7,
    orderId: "11007",
    productName: "Crate",
    prevStock: 90,
    stockOut: 40,
    currentStock: 50,
    driverName: "Virat",
    driverDetail: "9876543216",
    loadingDate: "22/02/2025",
    status: "Pending",
  },
  {
    id: 8,
    orderId: "11008",
    productName: "Bale Bag",
    prevStock: 150,
    stockOut: 100,
    currentStock: 50,
    driverName: "Rahul",
    driverDetail: "9876543217",
    loadingDate: "21/02/2025",
    status: "Picked",
  },
  {
    id: 9,
    orderId: "11009",
    productName: "Box",
    prevStock: 110,
    stockOut: 50,
    currentStock: 60,
    driverName: "Manish",
    driverDetail: "9876543218",
    loadingDate: "22/02/2025",
    status: "Picked",
  },
  {
    id: 10,
    orderId: "11010",
    productName: "Packet",
    prevStock: 200,
    stockOut: 100,
    currentStock: 100,
    driverName: "Sanjay",
    driverDetail: "9876543219",
    loadingDate: "23/02/2025",
    status: "Pending",
  },
];



const pickingColumns = [
  { key: "orderId", label: "Order ID", sortable: true },
  { key: "productName", label: "Product Name", sortable: true },
  { key: "prevStock", label: "Prev Stock", sortable: true },
  { key: "stockOut", label: "Stock Out", sortable: true },
  { key: "currentStock", label: "Current Stock", sortable: true },
  { key: "driverName", label: "Driver's Name", sortable: true },
  { key: "driverDetail", label: "Driver's Detail", sortable: true },
  { key: "loadingDate", label: "Loading Date", sortable: true },
  {
    key: "status",
    label: "Status",
  },
  { key: "action", label: "Action", render: (row: any) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white shadow-lg p-2 cursor-pointer"
      >
        <DropdownMenuItem onClick={() => console.log("view", row)}>
          View
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("edit", row)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("delete", row)}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  },
  
];


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Download,
  Filter,
  X,
  ChevronUp,
  ChevronDown,
  MoreVertical,
} from "lucide-react";
import DataTable 
// { TableColumn, TableRow } 
from "../dashboard/DataTable";

const ReportStockOut = () => {
  // const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [employeeFilter, setEmployeeFilter] = useState("All");
  const [designationFilter, setDesignationFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("Active");
  // const [actionFilter, setActionFilter] = useState("");
  // const [showAddEmployee, setShowAddEmployee] = useState(false);

  const [showFilters, setShowFilters] = useState(false);
  // const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const isTablet = useMediaQuery('(max-width: 1024px)');
  // console.log(selectedRows, actionFilter);
  // const handleSelectionChange = (selectedIds: (string | number)[]) => {
  //   setSelectedRows(selectedIds);
  // };

  const clearFilters = () => {
    setSearchTerm("");
    setEmployeeFilter("All");
    setDesignationFilter("All");
    setRoleFilter("All");
    setStatusFilter("Active");
    // setActionFilter("");
  };

  console.log("Selected Rows:", designationFilter, roleFilter, statusFilter);

  return (
    <div className="  rounded-lg">
      {/* Header */}
     
      <div className="space-y-4    rounded-lg">
        {/* Search and Filter Controls */}
        <div className="flex flex-col gap-4">
          {/* Main Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-3">
            {isMobile && (
              <div className="relative flex-1 max-w-[100%]">
                {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
                <Input
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-9 w-full"
                />
              </div>
            )}

            {isMobile && (
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3 text-sm bg-[#7ba83c] text-white hover:bg-[#6c973a] flex items-center gap-1"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                {showFilters ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>

          {/* Additional Filters - shown on desktop or when expanded on mobile */}

          {(showFilters || !isMobile) && (
            <div className="flex justify-between">
              <div className="flex gap-2">
                {!isMobile && (
                  <div className="relative flex-1 max-w-[15rem]">
                    <Input
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl- h-9 w-full"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                )}

                {/* Employee Filter */}
                <div className="flex items-center gap-2  flex-col md:flex-row text-left   border rounded-lg p-1.5 px-3">
                  <span className="text-sm text-gray-500 ">Vendor</span>
                  <Select
                    value={employeeFilter}
                    onValueChange={setEmployeeFilter}
                  >
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

                {/* Status Filter */}
                <div className="flex items-center gap-2 border rounded-lg p-1.5 px-3">
                  <span className="text-sm text-gray-500 hidden md:inline">
                    Stock Type
                  </span>
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="h-9 px-3 text-sm text-gray-500"
                >
                  Clear
                  <X className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="col-span-2 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 px-3 text-sm text-gray-500 flex-1"
                >
                  <Download className="h-4 w-4 mr-1" />
                  CSV Export
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
           <DataTable
                  columns={pickingColumns}
                  data={pickingData}
                  itemsPerPage={10}
                  selectable={false}
                  // onSelectionChange={handleSelectionChange}
                />
        </div>
      </div>

     

     
    </div>
  );
};

export default ReportStockOut;

// Add this hook to your hooks folder (if you don't have it already)
// hooks/use-media-query.ts
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AddStockModal from "./AddStockModel";

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
