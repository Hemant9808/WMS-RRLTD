import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {   Calendar } from 'lucide-react';

import OrderDetailsStockOut from './OrderDetailsStockOut';


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
      <DialogContent className="max-w-[90%]  mx-auto max-h-[95vh] overflow-y-auto custom-scrollbar"> 
        <DialogHeader className="flex flex-row items-center justify-between pb-2 space-y-0 ">
          <DialogTitle className="text-lg font-medium border-b w-[100%] pb-4">Stock Out</DialogTitle>
          
          
        </DialogHeader>

        <OrderDetailsStockOut />



        


        <div className="space-y- border rounded-xl ">
            <div className="bg-gray-50 p-2 py-3 rounded-t-xl overflow-hidden">
          <h2 className="text-xs  text-gray-600 font-semibold ">
            Delivery Details
          </h2>
        </div>
            <div>
              
              <div className="space-y- p-4 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Vendor Detail */}
                <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Customer Name</Label>
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
                  <Label htmlFor="transportCompany" className="text-xs font-medium">Delivery Person Name/Hauler</Label>
                  <Input
                    id="transportCompany"
                    value={formData.transportCompany}
                    onChange={(e) => setFormData({ ...formData, transportCompany: e.target.value })}
                  />
                </div>

                
                

               

                {/* Arrival Date */}
                <div className="space-y-2">
                  <Label htmlFor="arrivalDate" className="text-xs font-medium">Dispatch Date</Label>
                  <div className="relative">
                    <Input
                      id="arrivalDate"
                      // type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      className=""
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                 <div className="space-y-2">
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Weight Units</Label>
                  <div className="flex gap-2">
                    <Select value={formData.vendorDetail} onValueChange={(value) => setFormData({ ...formData, vendorDetail: value })}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vendor1">Kg </SelectItem>
                        <SelectItem value="vendor2">Ton </SelectItem>
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
                  <Label htmlFor="vendorDetail" className="text-xs font-medium">Delivery Status</Label>
                  <div className="flex gap-2">
                    <Select value={formData.vendorDetail} onValueChange={(value) => setFormData({ ...formData, vendorDetail: value })}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vendor1">Pending </SelectItem>
                        <SelectItem value="vendor2">Deliverd </SelectItem>
                      </SelectContent>
                    </Select>
                   
                  </div>
                </div>

                {/* Expected Delivery Date */}
                <div className="space-y-2">
                  <Label htmlFor="expectedDeliveryDate" className="text-xs font-medium">Quntity</Label>
                  <div className="relative">
                    <Input
                      id="Quantity"
                      value={formData.expectedDeliveryDate}
                      onChange={(e) => setFormData({ ...formData, expectedDeliveryDate: e.target.value })}
                      className="pr-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedDeliveryDate" className="text-xs font-medium">Added By</Label>
                  <div className="relative">
                    <Input
                      id="Quantity"
                      value={formData.expectedDeliveryDate}
                      onChange={(e) => setFormData({ ...formData, expectedDeliveryDate: e.target.value })}
                      className="pr-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedDeliveryDate" className="text-xs font-medium">Notes</Label>
                  <div className="relative">
                    <Input
                      id="Quantity"
                      value={formData.expectedDeliveryDate}
                      onChange={(e) => setFormData({ ...formData, expectedDeliveryDate: e.target.value })}
                      className="pr-10"
                    />
                  </div>
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


