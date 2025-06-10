import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {   Calendar } from 'lucide-react';

import barcode from "@/assets/barcode.png";


interface AddStockModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddStockModal = ({ open, onOpenChange }: AddStockModalProps) => {
  const [formData, setFormData] = useState({
    orderId: 'User',
    productName: '',
    category: '',
    unitType: '',
    grossQuantity: '24',
    thresholdCount: '',
    grossWeight: '',
    taxWeight: '',
    netWeight: '',
    weightUnits: '',
    sku: 'E.g. Chicken',
    notes: '',
    vendorDetail: '',
    transportCompany: '',
    truckTrailerReg: '',
    driverContact: '',
    arrivalDate: '',
    expectedDeliveryDate: '',
    deliveryStatus: '',
    auditedBy: '',
    receivedBy: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };


  

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90%] mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-lg font-medium">Add Stock (Stock-in)</DialogTitle>
          
        </DialogHeader>

        <div className=' border rounded-xl'>

            <div className="bg-gray-50 p-3 py-3 rounded-t-xl overflow-hidden">
          <h2 className="text-xs  text-gray-600 font-semibold ">
            Product Details
          </h2>
        </div>
            <div className="grid grid-cols-1 p-4 lg:grid-cols-4 gap-8">
          {/* Left Column - Product Details */}
          <div className="space-y-6">
            <div>
              
              <div className="space-y-">
                {/* Order ID */}
                <div className="space-y-2">
                  <Label htmlFor="orderId" className="text-xs font-medium">Order ID</Label>
                  <div className="flex gap-2">
                    <Input
                      id="orderId"
                      value={formData.orderId}
                      onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-3 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Auto Generate Order ID
                    </Button>
                  </div>
                </div>

                <div className="border mt-2 rounded-lg p-4 flex items-center justify-between">
                                 <img
                              src={barcode}
                              alt="barcode"
                              width={260}
                              height={50}
                              className="object-contain w-[100%]"
                            />
                            </div>


                {/* Product Name */}
                <div className="space-y-2">
                  <Label htmlFor="productName" className="text-xs font-medium">SKU </Label>
                  <div className="flex gap-2">
                    <Input
                      id="productName"
                      placeholder='12-05-ID Number'
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="flex-1"
                    />
                   
                  </div>
                </div>

               


              
              </div>
            </div>

          </div>
          

          {/* Right Column - Order Details */}
          <div className="space-y-4">
            <div className='space-y-2'>
              
              <div className="space-y-2 text-xs">
                {/* Vendor Detail */}
                <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium ">Product Name </Label>
                  <div className="flex gap-2">
                    <Input/>
                    
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Stocks In Quantiy </Label>
                  <div className="flex gap-2">
                    <Input/>
                    
                  </div>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Gross Weight(Total Weight) </Label>
                  <div className="flex gap-2">
                    <Input/>
                    
                  </div>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Notes </Label>
                  <div className="flex gap-2">
                    <Input/>
                    
                  </div>
                </div>

                
               

               

               
              </div>
            </div>
          </div>



          <div className="space-y-6">
            <div>
              
              <div className="space-y-4">
                {/* Vendor Detail */}
                <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Category </Label>
                  <div className="flex gap-2">
                    <Select value={formData.vendorDetail} onValueChange={(value) => setFormData({ ...formData, vendorDetail: value })}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vendor1">Vendor 1</SelectItem>
                        <SelectItem value="vendor2">Vendor 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-3 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Add
                    </Button>
                  </div>
                </div>

                {/* Transport Company Name/Hauler */}
                <div className="space-y-2">
                  <Label htmlFor="transportCompany" className="text-xs font-medium">Threshold Count</Label>
                  <Input
                    id="transportCompany"
                    value={formData.transportCompany}
                    onChange={(e) => setFormData({ ...formData, transportCompany: e.target.value })}
                  />
                </div>

                {/* Truck/Trailer Reg. no. */}
                <div className="space-y-2">
                  <Label htmlFor="truckTrailerReg" className="text-xs font-medium">Tare Weight (Packging Weight).</Label>
                  <Input
                    id="truckTrailerReg"
                    value={formData.truckTrailerReg}
                    onChange={(e) => setFormData({ ...formData, truckTrailerReg: e.target.value })}
                  />
                </div>

                

               
              </div>
            </div>
          </div>

           <div className="space-y-6">
            <div>
              
              <div className="space-y-4">
            
                <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Unit Type </Label>
                  <div className="flex gap-2">
                    <Select value={formData.vendorDetail} onValueChange={(value) => setFormData({ ...formData, vendorDetail: value })}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vendor1">Vendor 1</SelectItem>
                        <SelectItem value="vendor2">Vendor 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-3 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Add
                    </Button>
                  </div>
                </div>


                 <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Weight Type </Label>
                  <div className="flex gap-2">
                    <Select value={formData.vendorDetail} onValueChange={(value) => setFormData({ ...formData, vendorDetail: value })}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vendor1">Vendor 1</SelectItem>
                        <SelectItem value="vendor2">Vendor 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-3 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Add
                    </Button>
                  </div>
                </div>
                

                {/* Transport Company Name/Hauler */}
                <div className="space-y-2">
                  <Label htmlFor="transportCompany" className="text-xs font-medium">Net Weight </Label>
                  <Input
                    id="transportCompany"
                    value={formData.transportCompany}
                    onChange={(e) => setFormData({ ...formData, transportCompany: e.target.value })}
                  />
                </div>

                {/* Truck/Trailer Reg. no. */}
              
                

               
              </div>
            </div>
          </div>


        </div>
        </div>



        


        <div className="space-y-6 border rounded-xl ">
            <div className="bg-gray-50 p-2 py-3 rounded-t-xl overflow-hidden">
          <h2 className="text-xs  text-gray-600 font-semibold ">
            Order Details
          </h2>
        </div>
            <div>
              
              <div className="space-y-4 p-4 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Vendor Detail */}
                <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Vendor Detail</Label>
                  <div className="flex gap-2">
                    <Select value={formData.vendorDetail} onValueChange={(value) => setFormData({ ...formData, vendorDetail: value })}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vendor1">Vendor 1</SelectItem>
                        <SelectItem value="vendor2">Vendor 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-3 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Add
                    </Button>
                  </div>
                </div>

                {/* Transport Company Name/Hauler */}
                <div className="space-y-2">
                  <Label htmlFor="transportCompany" className="text-xs font-medium">Transport Company Name/Hauler</Label>
                  <Input
                    id="transportCompany"
                    value={formData.transportCompany}
                    onChange={(e) => setFormData({ ...formData, transportCompany: e.target.value })}
                  />
                </div>

                {/* Truck/Trailer Reg. no. */}
                <div className="space-y-2">
                  <Label htmlFor="truckTrailerReg" className="text-xs font-medium">Truck/Trailer Reg. no.</Label>
                  <Input
                    id="truckTrailerReg"
                    value={formData.truckTrailerReg}
                    onChange={(e) => setFormData({ ...formData, truckTrailerReg: e.target.value })}
                  />
                </div>

                {/* Driver Contact Number */}
                <div className="space-y-2">
                  <Label htmlFor="driverContact" className="text-xs font-medium">Driver Contact Number</Label>
                  <Input
                    id="driverContact"
                    value={formData.driverContact}
                    onChange={(e) => setFormData({ ...formData, driverContact: e.target.value })}
                  />
                </div>

                {/* Arrival Date */}
                <div className="space-y-2">
                  <Label htmlFor="arrivalDate" className="text-xs font-medium">Arrival Date</Label>
                  <div className="relative">
                    <Input
                      id="arrivalDate"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      className="pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Expected Delivery Date */}
                <div className="space-y-2">
                  <Label htmlFor="expectedDeliveryDate" className="text-xs font-medium">Expected Delivery Date</Label>
                  <div className="relative">
                    <Input
                      id="expectedDeliveryDate"
                      type="date"
                      value={formData.expectedDeliveryDate}
                      onChange={(e) => setFormData({ ...formData, expectedDeliveryDate: e.target.value })}
                      className="pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Delivery Status */}
                <div className="space-y-2">
                  <Label htmlFor="deliveryStatus" className="text-xs font-medium">Delivery Status</Label>
                  <Select value={formData.deliveryStatus} onValueChange={(value) => setFormData({ ...formData, deliveryStatus: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-transit">In Transit</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Audited By */}
                <div className="space-y-2">
                  <Label htmlFor="auditedBy" className="text-xs font-medium">Audited By</Label>
                  <Input
                    id="auditedBy"
                    value={formData.auditedBy}
                    onChange={(e) => setFormData({ ...formData, auditedBy: e.target.value })}
                  />
                </div>

                {/* Received By */}
                <div className="space-y-2">
                  <Label htmlFor="receivedBy" className="text-xs font-medium">Received By</Label>
                  <Select value={formData.receivedBy} onValueChange={(value) => setFormData({ ...formData, receivedBy: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee1">Employee 1</SelectItem>
                      <SelectItem value="employee2">Employee 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>


        {/* Action Buttons */}
        <div className="flex gap-3 items-start pt-6 border-t">
          <Button
            variant="outline"
            onClick={handleCancel}
            // className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className=" bg-primary hover:bg-primary text-white"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddStockModal;


