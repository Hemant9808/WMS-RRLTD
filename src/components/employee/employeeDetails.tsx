import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

// import VendorNotes from "@/components/vendor/vendorNotes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

// import DataTable, { TableColumn, TableRow } from '../../components/dashboard/DataTable';
import { TableColumn, TableRow } from "@/components/ui/DataTableComp";

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
];

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
];
const EmployeeDetails = () => {
  return (
    <div className="flex-1 space-y-6 px-4 bg-white overflow-hidden mt-5 rounded-xl h-[95%]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Employee</h1>
          <p className="text-sm text-gray-500 mt-1">View and manage Employee</p>
        </div>
      </div>

      {/* Vendor Profile Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Profile */}

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
                  <span className="text-gray-600 flex-1">abc123@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Tabs */}
          <div className="flex-1">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-0 overflow-hidden">
              {/* Section Header */}
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-100 text-sm font-medium text-gray-600 rounded-t-2xl">
                Other Details
              </div>

              {/* Content Grid */}
              <div className="px-5 py-10 grid grid-cols-1 md:grid-cols-5 gap-y-6 gap-x-12">
                {/* Left column */}
                <div className="space-y-6 md:col-span-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Official Website
                    </label>
                    <p className="text-sm text-gray-500 mt-1">
                      05–12–2 https://demo.worksuite.biz/account/projects024
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <p className="text-sm text-gray-500 mt-1">#12345</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Shipping Address
                    </label>
                    <p className="text-sm text-gray-500 mt-1">#12345</p>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-6 md:col-span-2">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Opening Balance
                    </label>
                    <p className="text-sm text-gray-500 mt-1">₹ 4584675</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Billing Address
                    </label>
                    <p className="text-sm text-gray-500 mt-1">#12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
