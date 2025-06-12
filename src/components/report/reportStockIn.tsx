const deliveryData: TableRow[] = [
  {
    id: 1,
    orderId: "11013",
    dateTime: "21/02/2025",
    vendor: {
      name: "Ester Howard",
      company: "abc pvt ltd",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    productName: "Bale Bag",
    category: "Electronics",
    arrivalDate: "21/02/2025",
    quantity: "100 pcs",
    unitType: "Kg",
    expectedDate: "22/2/2025",
    deliveryStatus: "Pending",
  },
  {
    id: 2,
    orderId: "11013",
    dateTime: "21/02/2025",
    vendor: {
      name: "Ester Howard",
      company: "abc pvt ltd",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    productName: "Bale Bag",
    category: "Electronics",
    arrivalDate: "21/02/2025",
    quantity: "100 pcs",
    unitType: "Kg",
    expectedDate: "22/2/2025",
    deliveryStatus: "Completed",
  },
  {
    id: 3,
    orderId: "11013",
    dateTime: "21/02/2025",
    vendor: {
      name: "Ester Howard",
      company: "xyz pvt ltd",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    productName: "Bale Bag",
    category: "Electronics",
    arrivalDate: "21/02/2025",
    quantity: "100 pcs",
    unitType: "Kg",
    expectedDate: "22/2/2025",
    deliveryStatus: "Processing",
  },
  {
    id: 4,
    orderId: "11013",
    dateTime: "21/02/2025",
    vendor: {
      name: "Ester Howard",
      company: "xyz pvt ltd",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    productName: "Bale Bag",
    category: "Electronics",
    arrivalDate: "21/02/2025",
    quantity: "100 pcs",
    unitType: "Kg",
    expectedDate: "22/2/2025",
    deliveryStatus: "Completed",
  },
  {
    id: 5,
    orderId: "11013",
    dateTime: "21/02/2025",
    vendor: {
      name: "Ester Howard",
      company: "xyz pvt ltd",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    productName: "Bale Bag",
    category: "Electronics",
    arrivalDate: "21/02/2025",
    quantity: "100 pcs",
    unitType: "Kg",
    expectedDate: "22/2/2025",
    deliveryStatus: "Canceled",
  },
  {
    id: 6,
    orderId: "11013",
    dateTime: "21/02/2025",
    vendor: {
      name: "Ester Howard",
      company: "xyz pvt ltd",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    productName: "Bale Bag",
    category: "Electronics",
    arrivalDate: "21/02/2025",
    quantity: "100 pcs",
    unitType: "Kg",
    expectedDate: "22/2/2025",
    deliveryStatus: "Completed",
  },
  {
    id: 7,
    orderId: "11013",
    dateTime: "21/02/2025",
    vendor: {
      name: "Ester Howard",
      company: "xyz pvt ltd",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    productName: "Bale Bag",
    category: "Electronics",
    arrivalDate: "21/02/2025",
    quantity: "100 pcs",
    unitType: "Kg",
    expectedDate: "22/2/2025",
    deliveryStatus: "Completed",
  },
  {
    id: 8,
    orderId: "11013",
    dateTime: "21/02/2025",
    vendor: {
      name: "Ester Howard",
      company: "xyz pvt ltd",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    productName: "Bale Bag",
    category: "Electronics",
    arrivalDate: "21/02/2025",
    quantity: "100 pcs",
    unitType: "Kg",
    expectedDate: "22/2/2025",
    deliveryStatus: "Canceled",
  },
];


const columns: TableColumn[] = [
  {
    key: "orderId",
    label: "Order ID",
    sortable: true,
    width: "100px",
    render: (row: any) => (
      <span className="text-gray-600 text-sm font-medium">{row.orderId}</span>
    ),
  },
  {
    key: "dateTime",
    label: "Order Date",
    sortable: true,
    width: "120px",
    render: (row: any) => (
      <span className="text-gray-500 text-sm">{row.dateTime}</span>
    ),
  },
  {
    key: "vendor",
    label: "Vendor",
    sortable: true,
    width: "220px",
    render: (row: any) => (
      <div className="flex items-center gap-3">
        <img
          src={row.vendor.avatar}
          alt={row.vendor.name}
          className="h-8 w-8 rounded-full object-cover"
        />
        <div>
          <div className="text-sm text-gray-700">{row.vendor.name}</div>
          <div className="text-xs text-gray-500">{row.vendor.company}</div>
        </div>
      </div>
    ),
  },
  {
    key: "productName",
    label: "Product Name",
    sortable: true,
    width: "150px",
  },
  {
    key: "category",
    label: "Category",
    sortable: true,
    width: "120px",
  },
  {
    key: "arrivalDate",
    label: "Arrival Date",
    sortable: true,
    width: "120px",
  },
  {
    key: "quantity",
    label: "Quantity",
    sortable: true,
    width: "100px",
  },
  {
    key: "unitType",
    label: "Unit Type",
    sortable: true,
    width: "100px",
  },
  {
    key: "expectedDate",
    label: "Expected Date",
    sortable: true,
    width: "120px",
  },
  {
    key: "deliveryStatus",
    label: "Delivery Status",
    sortable: true,
    width: "130px",
    render: (row: any) => {
      const statusStyles: Record<string, string> = {
        Completed: "bg-green-100 text-green-800 hover:bg-green-100",
        Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
        Processing: "bg-blue-100 text-blue-800 hover:bg-blue-100",
        Canceled: "bg-red-100 text-red-800 hover:bg-red-100",
      };

      return (
        <Badge
          className={`text-sm font-medium ${statusStyles[row.deliveryStatus] || "bg-gray-100 text-gray-800"}`}
        >
          {row.deliveryStatus}
        </Badge>
      );
    },
  },
  {
    key: "action",
    label: "Action",
    width: "80px",
    render: (row: any) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white shadow-lg p-2 cursor-pointer"
        >
          <DropdownMenuItem
            className="outline-none text-sm hover:bg-[#4ea350] hover:text-white rounded px-2 py-1"
            onClick={() => console.log("view", row)}
          >
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem
            className="outline-none text-sm hover:bg-[#4ea350] hover:text-white rounded px-2 py-1"
            onClick={() => console.log("edit", row)}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="outline-none text-sm hover:bg-[#d85c4e] hover:text-white rounded px-2 py-1"
            onClick={() => console.log("delete", row)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  MoreHorizontal,
  X,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import DataTable, { TableColumn, TableRow } from "../dashboard/DataTable";

const ReportStockTable = () => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [employeeFilter, setEmployeeFilter] = useState("All");
  const [designationFilter, setDesignationFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("Active");
  const [actionFilter, setActionFilter] = useState("");
  // const [showAddEmployee, setShowAddEmployee] = useState(false);

  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const isTablet = useMediaQuery('(max-width: 1024px)');
  console.log(selectedRows, actionFilter);
  const handleSelectionChange = (selectedIds: (string | number)[]) => {
    setSelectedRows(selectedIds);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setEmployeeFilter("All");
    setDesignationFilter("All");
    setRoleFilter("All");
    setStatusFilter("Active");
    setActionFilter("");
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
            columns={columns}
            data={deliveryData}
            itemsPerPage={10}
            selectable={true}
            onSelectionChange={handleSelectionChange}
            onRowClick={() => navigate("/dashboard/stockInDetails")}
            // responsive={isMobile || isTablet}
          />
        </div>
      </div>

     

     
    </div>
  );
};

export default ReportStockTable;

// Add this hook to your hooks folder (if you don't have it already)
// hooks/use-media-query.ts
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
