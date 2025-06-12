const stockTransferData = [
  {
    id: 1,
    orderId: "11013",
    productName: "Bale Bag",
    prevStock: 100,
    stockOut: 50,
    currentStock: 2,
    vendorName: "Rahul",
    companyDetail: "xyz pvt ltd",
    vendorDetail: "987654321",
  },
   {
    id: 1,
    orderId: "11013",
    productName: "Bale Bag",
    prevStock: 100,
    stockOut: 50,
    currentStock: 2,
    vendorName: "Rahul",
    companyDetail: "xyz pvt ltd",
    vendorDetail: "987654321",
  },
   {
    id: 1,
    orderId: "11013",
    productName: "Bale Bag",
    prevStock: 100,
    stockOut: 50,
    currentStock: 2,
    vendorName: "Rahul",
    companyDetail: "xyz pvt ltd",
    vendorDetail: "987654321",
  },
  // more rows...
];





const stockTransferColumns = [
  { key: "orderId", label: "Order ID", sortable: true },
  { key: "productName", label: "Product Name", sortable: true },
  { key: "prevStock", label: "Prev Stock", sortable: true },
  { key: "stockOut", label: "Stock Out", sortable: true },
  { key: "currentStock", label: "Current Stock", sortable: true },
  { key: "vendorName", label: "Vendor's Name", sortable: true },
  { key: "companyDetail", label: "Company Detail", sortable: true },
  { key: "vendorDetail", label: "Vendor's Detail", sortable: true },
  { key: "action", label: "Action", render: (row:any) => (
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

const ReportStockLow = () => {
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
                  columns={stockTransferColumns}
                  data={stockTransferData}
                  itemsPerPage={10}
                  selectable={false}
                  // onSelectionChange={handleSelectionChange}
                />
        </div>
      </div>

     

     
    </div>
  );
};

export default ReportStockLow;

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
