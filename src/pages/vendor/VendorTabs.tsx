import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

import VendorStockIn from "@/components/vendor/VendorStockIn";
import VendorDetails from "@/components/vendor/vendorDetails";
import VendorNotes from "@/components/vendor/vendorNotes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import DataTable, { TableColumn, TableRow } from '../../components/dashboard/DataTable';
import { Badge } from "@/components/ui/badge";
import Employee from "../Employee/Employee";
import DataTable, {
  TableColumn,
  TableRow,
} from "@/components/ui/DataTableComp";

const stockInColumns: TableColumn[] = [
  { key: "orderNo", label: "Order No", sortable: true, width: "120px" },
  { key: "productName", label: "Product Name", sortable: true, width: "150px" },
  { key: "category", label: "Category", sortable: true, width: "150px" },
  { key: "unitType", label: "Unit Type", sortable: true, width: "120px" },
  { key: "arrivalDate", label: "Arrival Date", sortable: true, width: "150px" },
  {
    key: "expectedDate",
    label: "Expected Date",
    sortable: true,
    width: "150px",
  },
  {
    key: "deliveryDate",
    label: "Delivery Date",
    sortable: true,
    width: "150px",
  },
  {
    key: "action",
    label: "Action",
    width: "80px",
    render: (row: any) => (
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

const stockInData: TableRow[] = [
  {
    id: 1,
    orderNo: "1456",
    productName: "--",
    category: "--",
    unitType: "--",
    arrivalDate: "--",
    expectedDate: "--",
    deliveryDate: "--",
  },
  {
    id: 2,
    orderNo: "14552",
    productName: "--",
    category: "--",
    unitType: "--",
    arrivalDate: "--",
    expectedDate: "--",
    deliveryDate: "--",
  },
];

export const noteData: TableRow[] = [
  {
    id: 1,
    dateTime: "2025-05-28 22:31:05",
    noteTitle: "--",
    noteDetail: "--",
  },
  {
    id: 2,
    dateTime: "2025-05-28 22:31:05",
    noteTitle: "--",
    noteDetail: "--",
  },
]


export const noteColumns: TableColumn[] = [
  {
    key: "dateTime",
    label: "Date & Time",
    sortable: true,
    width: "180px",
  },
  {
    key: "noteTitle",
    label: "Note Title",
    sortable: true,
    width: "200px",
  },
  {
    key: "noteDetail",
    label: "Note Detail",
    sortable: true,
    width: "300px",
  },
  {
    key: "action",
    label: "Action",
    width: "80px",
    render: (row: any) => (
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
]
const VendorTabs = () => {
  const [activeTab, setActiveTab] = useState("vendor-details");

  const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
  
    const handleSubmit = () => {
      console.log({ title, detail })
      setOpen(false)
    }

  return (
    <div className="flex-1 space-y-6 px-4 bg-white overflow-hidden mt-5 rounded-xl h-[95%]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Vendor</h1>
          <p className="text-sm text-gray-500 mt-1">View and manage Vendor</p>
        </div>
       {activeTab=="notes" && <Button
        onClick={()=>setOpen(true)}
         className="bg-[#7ba83c] hover:bg-[#6c973a] text-white">
          +{" "} Add Notes
        </Button>}
         {activeTab  == "stock-in" &&<Button
        onClick={()=>setOpen(true)}
         className="bg-[#7ba83c] hover:bg-[#6c973a] text-white">
             +{" "} Add Stock
        </Button>}
      </div>

      {/* Vendor Profile Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Profile */}

          {activeTab === "vendor-details" && (
            <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white shadow-sm p-4">
              {/* Profile Image and Status */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative ">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                    alt="Janet Daniel"
                    className="w-[10rem] h-[10rem]  rounded-full object-cover border-4 border-white shadow"
                  />
                </div>
                <span className=" bg-green-100 text-green-600 font-semibold text-xs  px-4 py-2 rounded-lg shadow-sm">
                  Active
                </span>

                <h3 className=" text-base font-semibold text-gray-800">
                  Janet Daniel
                </h3>
              </div>

              {/* Visitor Info Section */}
              <div className="mt-6">
                <div className="bg-gray-50 px-4 py-2 mb-4 rounded-t-md border-t border-gray-200 text-md font-medium text-gray-600">
                  Visitor Information
                </div>
                <div className="bg-white px-4 py-3 rounded-b-md space-y-3 text-sm">
                  <div className="flex  text-left text-gray-600">
                    <span className="font-medium flex-1">Company Name</span>
                    <span className="text-gray-600 flex-1 ">Nike</span>
                  </div>
                  <div className="flex  text-left text-gray-600">
                    <span className="font-medium flex-1">Contact</span>
                    <span className="text-gray-600 flex-1">9876543210</span>
                  </div>
                  <div className="flex  text-left text-gray-600">
                    <span className="font-medium flex-1">Email</span>
                    <span className="text-gray-600 flex-1">
                      abc123@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Side - Tabs */}
          <div className="flex-1">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex items-center justify-between mb-6">
                {/* <TabsList className="grid w-auto grid-cols-3 bg-gray-100">
                  <TabsTrigger 
                    value="vendor-details" 
                    className="data-[state=active]:bg-white data-[state=active]:text-green-900"
                  >
                    Vendor Details
                  </TabsTrigger>
                  <TabsTrigger 
                    value="notes" 
                    className="data-[state=active]:bg-white data-[state=active]:text-gray-600 data-[state=active]:underline-green-600 "
                  >
                    Notes
                  </TabsTrigger>
                  <TabsTrigger 
                    value="stock-in" 
                    className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
                  >
                    Stock In
                  </TabsTrigger>
                </TabsList> */}
                <TabsList className="flex space-x-6 border-b border-gray-200 bg-transparent px-4">
                  <TabsTrigger
                    value="vendor-details"
                    className="relative pb-2 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-green-600"
                  >
                    Vendor Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="notes"
                    className="relative pb-2 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-green-600"
                  >
                    Notes
                  </TabsTrigger>
                  <TabsTrigger
                    value="stock-in"
                    className="relative pb-2 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-green-600"
                  >
                    Stock In
                  </TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <TabsContent value="vendor-details" className="mt-0">
                <VendorDetails />
              </TabsContent>

              <TabsContent value="notes" className="mt-0">
                {/* <VendorNotes /> */}
                <DataTable
                  columns={noteColumns}
                  data={noteData}
                  itemsPerPage={10}
                  selectable={false}
                  // onSelectionChange={handleSelectionChange}
                />
              </TabsContent>

              <TabsContent value="stock-in" className="mt-0">
                <DataTable
                  columns={stockInColumns}
                  data={stockInData}
                  itemsPerPage={10}
                  selectable={false}
                  // onSelectionChange={handleSelectionChange}
                />
                {/* <VendorStockIn /> */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

        <Dialog open={open} onOpenChange={setOpen}>
           
      
            <DialogContent className="sm:max-w-md md:max-w-xl rounded-xl">
              <DialogHeader className="relative">
                <DialogTitle className="text-gray-600 text-lg">Add Note</DialogTitle>
                
              </DialogHeader>
      
              <div className="space-y-8 py-3 pb- mt-2">
                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Title</label>
                  <Input
                    value={title}
                     placeholder="12-05--ID Number"
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-3 rounded-lg"
                  />
                </div>
      
                <div>
                  <label className="text-sm text-gray-700">Note Detail</label>
                  <Textarea
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    placeholder="Type"
                    rows={4}
                    className="mt-1"
                  />
                </div>


                <div className="border-t ">
      
                <div className="flex justify-start space-x-2 pt-2  mt-3 ">
                    
                  <Button
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="text-gray-700 border-[#6A8F2F]"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-[#6A8F2F] rounded-md hover:bg-green-800 text-white"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

     

      {/* Pagination */}
      {/* <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">10 of 100 entries</span>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Prev
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="default" size="sm" className="h-8 w-8 p-0">1</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">4</Button>
            <span className="px-2 text-gray-500">...</span>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">30</Button>
          </div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default VendorTabs;
