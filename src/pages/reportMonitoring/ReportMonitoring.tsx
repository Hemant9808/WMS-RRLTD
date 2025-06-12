import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AlignJustify, BriefcaseBusiness, MoreHorizontal, MoreVertical, NotebookPen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// import VendorDetails from "@/components/vendor/vendorDetails";
// import VendorNotes from "@/components/vendor/vendorNotes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";




import ReportStockTable from "@/components/report/reportStockIn";
import  { TableColumn, TableRow } from "@/components/dashboard/DataTable";
import ReportStockOut from "@/components/report/reportStockIOut";
import ReportStockLow from "@/components/report/ReportLowStock";
import ReportStockAdjustment from "@/components/report/ReportAdjustment";













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
const ReportMonitoring = () => {
  const [activeTab, setActiveTab] = useState("vendor-details");

  const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
  
    const handleSubmit = () => {
      console.log({ title, detail })
      setOpen(false)
    }

  return (
    <div className="flex-1 p-4 space-y-4  bg-white mt-5 scrollable-hidden-scrollbar  rounded-xl lg:h-[95%]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-600">Report & Monitoring </h1>
          <p className="text-xs font-semibold text-gray-500 mt-1">View Sotck IN and Out Report Details</p>
        </div>
       
      </div>

      
      <div className="bg-white  ">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Profile */}

      

          {/* Right Side - Tabs */}
          <div className="flex-1 ">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full "
            >
              <div className="flex bg--400 border-b mb-4  items-center justify-between ">
               
                <TabsList className="flex space-x-6 text-xs  bg-red-400 border-gray-200 bg-transparent ">
                  <TabsTrigger
                    value="stock-in"
                    className="relative pb-2 px-0 text-xs font-semibold text-gray-500 data-[state=active]:text-green-700 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-green-600"
                  >
                   <AlignJustify className="w-4 mr-1" /> Stock IN 
                  </TabsTrigger>
                  <TabsTrigger
                    value="stock-out"
                    className="relative pb-2 text-xs font-semibold text-gray-500 data-[state=active]:text-green-700 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-green-600"
                  >
                    <NotebookPen className="w-4 mr-1" />Stock Out
                  </TabsTrigger>
                  <TabsTrigger
                    value="low-stock"
                    className="relative pb-2 text-xs font-semibold text-gray-500 data-[state=active]:text-green-700 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-green-600"
                  >
                  <BriefcaseBusiness className="w-4 mr-1"  /> Low Stock Item
                  </TabsTrigger>
                   <TabsTrigger
                    value="stock-adjustment"
                    className="relative pb-2 text-xs font-semibold text-gray-500 data-[state=active]:text-green-700 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-green-600"
                  >
                  <BriefcaseBusiness className="w-4 mr-1"  /> Stock Adjustment
                  </TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <TabsContent value="stock-in" className="mt-0">
               
                <ReportStockTable />
              </TabsContent>

              <TabsContent value="stock-out" className="mt-0">
              
                <ReportStockOut/>
               
              </TabsContent>

              <TabsContent value="low-stock" className="mt-0">
                <ReportStockLow/>
               
              </TabsContent>
              <TabsContent value="stock-adjustment" className="mt-0">
                <ReportStockAdjustment/>
              
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

export default ReportMonitoring;
