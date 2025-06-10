import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import barcode from "@/assets/barcode.png";
import scanner from "@/assets/scanner.png";
// import Image from "next/image"

const OrderDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 ">
      {/* Left Section: Order ID & Barcode */}
      <Card className="p  lg:w-[600px]">
        <div className="bg-gray-50 p-2 w-full py-3 rounded-t-xl overflow-hidden">
          <h2 className="text-xs  text-gray-600 font-semibold ">
            Order ID & Barcode{" "}
          </h2>
        </div>
        <div className="p-3 py-4 w-[100%] space-y-4">
          <div className="flex w-full justify-between items-center gap-2 mb-4">
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="" className="text-xs text-gray-500 font-semibold">
                Order Id
              </label>
              <Input placeholder="876543" className=" text-sm" readOnly />
            </div>
            <Button className="mt-6" variant="outline" size="icon">
              <Printer className="h-4 w-12" />
            </Button>
          </div>

          <div className="flex flex-col w-[100%]  gap-4">
            <div className="border rounded-lg p-4 flex items-center justify-between">
                 <img
              src={barcode}
              alt="barcode"
              width={260}
              height={60}
              className="object-contain w-[100%]"
            />
            </div>
           
            <img
              src={scanner}
              alt="qr code"
              width={80}
              height={80}
              className="object-contain w-[6rem]"
            />
          </div>
        </div>
      </Card>

      {/* Right Section: Product Details */}
      <Card className="w-full h-full text-xs">
        <div className="bg-gray-50 p-2 py-3 rounded-t-xl overflow-hidden">
          <h2 className="text-xs  text-gray-600 font-semibold ">
            Product Details
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-4 p-3 pl-6 gap-x-8">
          <Detail label="Order ID Number" value="12345" />
          <Detail label="Arrival Date" value="12/02/2025" />
          <Detail label="Category" value="Lorem Ipsum" />

          <Detail label="SKU" value="09876" />
          <Detail label="Expected Delivery Date" value="12/02/2025" />
          <Detail label="Truck/ Trailer Reg. No." value="67DF5678" />

          <Detail label="Select Vendor" value="Rahul" />
          <Detail
            label="Delivery Status"
            value={
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Delivered
              </span>
            }
          />
          <Detail label="Threshold Count" value="10" />

          <Detail
            label="Haulier/ Transport Company Name"
            value="Lorem Ipsum pvt ltd"
          />
          <Detail label="Received By" value="Robin Daniel" />
          <Detail label="Unit Type" value="Lorem Ipsum" />

          <Detail label="Driver Contact Number" value="0987654321" />
          <Detail label="Product Name" value="Bale Bag" />

          <Detail label="Net Weight" value="120Kg" />

          {/* <Detail label="Product Name" value="Bale Bag" />
          <Detail label="Net Weight" value="120Kg" />
          <Detail label="Weight Units" value="Kg" />

          <Detail label="Gross Weight (Total Weight)" value="78Kg" />
          <Detail label="Tare Weight (Packaging weight)" value="45Kg" /> */}
        </div>
      </Card>
    </div>
  );
};

const Detail = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div>
    <p className="text-gray-800 font-medium text-xs mb-1">{label}</p>
    <p className="text-xs font-medium text-gray-500">{value}</p>
  </div>
);

export default OrderDetails;
