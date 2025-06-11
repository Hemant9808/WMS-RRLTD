import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Plus, Minus } from 'lucide-react';
import QRScannerModal from './qrModel';

const StockAdjustment = () => {
   const [showScanner, setShowScanner] = useState(false);
  return (
    <div className="p-6 scrollable-hidden-scrollbar  space-y-4 bg-white rounded-xl max-h-screen shadow-md">
      <h1 className="text-2xl font-semibold">Stock Adjustment</h1>
      <p className="text-muted-foreground">View Stock Adjustment</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {/* Scan Mode */}
        <Card onClick={() => setShowScanner(true)} className="cursor-pointer">
          <CardContent className="space-y-4 p-4">
            <Label>Item SKU & Barcode</Label>
            <div   className="flex items-center gap-2">
              <Select
             
              >
                <SelectTrigger>
                  <SelectValue placeholder="--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Item 1</SelectItem>
                </SelectContent>
              </Select>
              {/* <Button variant="outline"><BarcodeStackIcon  /></Button> */}
            </div>
            <div className="h-32 border rounded flex items-center justify-center text-muted-foreground">
              No barcode scanned or selected
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="">
            
          <CardContent className=" overflow-auto p-0 rounded-xl">
            <table className="w-full  text-gray-500 text-xs">
              <thead  className='bg-gray-100'>
                <tr className="">
                  <th className="text-left p-2">Date & Time</th>
                  <th className="text-left p-2">Order ID</th>
                  <th className="text-left p-2">Stock Type</th>
                  <th className="text-left p-2">QTY's</th>
                  <th className="text-left p-2">Reason</th>
                </tr>
              </thead>
              <tbody>
                {Array(7).fill(0).map((_, i) => (
                  <tr key={i} className="font-medium text-gray-400">
                    <td className="p-2">2025-05-28 22:31:05</td>
                    <td className="p-2">121236</td>
                    <td className="p-2">Bag</td>
                    <td className="p-2">24</td>
                    <td className="p-2">Lorem ipsum</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Product Information */}
        <Card>
            <div className="bg-gray-100 p-2 rounded-t-xl">
                <h2 className="text-xs text-gray-600 font-semibold">Product Information</h2>
            </div>
          <CardContent className="p-4 grid grid-cols-2 gap-6     text-sm">
            <Detail label="SKU" value="12345" />
            <Detail label="Vendor Info" value="--" />
            <Detail label="Arrival Date" value="10-06-2025" />
            <Detail label="Expected Delivery Date" value="10-06-2025" />
            <Detail label="Category" value="--" />
            <Detail label="Stock Type" value="--" />
            <Detail label="Current Qtys" value="--" />
            <Detail label="Units" value="--" />
            <Detail label="Gross Weight" value="1122" />
            <Detail label="Tare Weight" value="1122" />
            <div className="col-span-2">
              <Detail label="Note" value="Lorem ipsum" />
            </div>
          </CardContent>
        </Card>

        {/* Operational Fields */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <div>
              <Label className='text-gray-500'>Reason</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reason1">Reason 1</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label  className='text-gray-500'>Adjustment Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="--" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type1">Type 1</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label  className='text-gray-500'>Adjustment Quantity</Label>
              <div className="flex items-center gap-2">
                <div className='flex gap-2 w-[100%] border p-1 rounded-xl'>
                <Button variant="outline" size="icon"><Minus className="w-10 h-5" /></Button>
                <Input className=" text-center border-none" value="24" readOnly />
                <Button variant="outline" size="icon"><Plus className="w-4 h-4" /></Button>
                </div>
              </div>
            </div>

            <div>
              <Label  className='text-gray-500'>Customer Name</Label>
              <div className="flex gap-2">
                <Input placeholder="--" />
                <Button>Add</Button>
              </div>
            </div>

            <div className="p-2 border rounded text-sm text-muted-foreground flex justify-between items-end">
             
              <div className='flex flex-col '>
                 <span>Stock Change: </span>
              <span>Current: 45</span>
              </div>
              <span className="mx-2"> →</span>
              <span>New: 32</span>
            </div>
          </CardContent>
        </Card>
      </div>

       {/* {showScanner &&  */}
       <QRScannerModal open = {showScanner} onClose={() => setShowScanner(false)} />
      {/* } */}

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default StockAdjustment;


const Detail = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div>
    <p className="text-gray-600 font-medium text-xs mb-1">{label}</p>
    <p className="text-xs font-medium text-gray-400">{value}</p>
  </div>
);
