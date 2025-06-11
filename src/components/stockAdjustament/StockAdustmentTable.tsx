const inventoryData: TableRow[] = [
  {
    id: 1,
    dateTime: "2025-05-28 22:31:05",
    type: "Bale Bag",
    sku: "151654982926",
    adjustedBy: "--",
    category: "Electronics",
    previousStock: 50,
    adjustmentQty: 50,
    newStock: 50,
    reason: "--",
    note: "--",
  },
  {
    id: 2,
    dateTime: "2025-05-28 22:31:05",
    type: "Bale Bag",
    sku: "151654982926",
    adjustedBy: "--",
    category: "Electronics",
    previousStock: 20,
    adjustmentQty: 20,
    newStock: 20,
    reason: "--",
    note: "--",
  },
  {
    id: 3,
    dateTime: "2025-05-28 22:31:05",
    type: "Bale Bag",
    sku: "151654982926",
    adjustedBy: "--",
    category: "Electronics",
    previousStock: 21,
    adjustmentQty: 21,
    newStock: 21,
    reason: "--",
    note: "--",
  },
  // ... more rows following the same pattern
];

const columns: TableColumn[] = [
  { key: "dateTime", label: "Date & Time", sortable: true, width: "160px" },
  { key: "type", label: "Type", sortable: true, width: "120px" },
  { key: "sku", label: "SKU", sortable: true, width: "140px" },
  { key: "adjustedBy", label: "Adjusted By", sortable: true, width: "120px" },
  { key: "category", label: "Category", sortable: true, width: "120px" },
  { key: "previousStock", label: "Previous Stock", sortable: true, width: "130px" },
  { key: "adjustmentQty", label: "Adjustment QTY's", sortable: true, width: "130px" },
  { key: "newStock", label: "New Stock", sortable: true, width: "120px" },
  { key: "reason", label: "Reason", sortable: true, width: "100px" },
  { key: "note", label: "Note", sortable: true, width: "100px" },
];


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Search,
  Download,
  Filter,

  ChevronUp,
  ChevronDown,
} from "lucide-react";
import DataTable, { TableColumn, TableRow } from "../dashboard/DataTable";

const StockAdjustmentTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const isTablet = useMediaQuery('(max-width: 1024px)');




  return (
    <div className=" bg-white   p-4 rounded-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
            Stock Adustment
          </h1>
          <p className="text-sm text-gray-500 mt-1">View Stock Adjustment</p>
        </div>
        
      </div>

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

               
                
              </div>

              <div className="col-span-2 flex items-center gap-2">
                <Button
                  // onClick={() => setShowImportProducts(true)}
                  variant="outline"
                  size="sm"
                  className="h-9 px-3 text-sm text-gray-500 flex-1"
                >
                  <Download className="h-4 w-4 mr-1" />
                   Export
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
          <DataTable
            columns={columns}
            data={inventoryData}
            itemsPerPage={10}
            selectable={true}
            onSelectionChange={()=>{}}
            onRowClick={() => navigate("/dashboard/StockAdjustment")}
            // responsive={isMobile || isTablet}
          />
        </div>
      </div>

    

      
     
    </div>
  );
};

export default StockAdjustmentTable;

// Add this hook to your hooks folder (if you don't have it already)
// hooks/use-media-query.ts
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
