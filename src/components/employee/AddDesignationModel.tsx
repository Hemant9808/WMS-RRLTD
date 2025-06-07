import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {  Trash2 } from 'lucide-react';

interface AddDesignationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddDesignationModal = ({ open, onOpenChange }: AddDesignationModalProps) => {
  const [newDesignation, setNewDesignation] = useState('');
  const [designations, setDesignations] = useState([
    { id: 1, name: 'Supervisor' }
  ]);

  const handleAddDesignation = () => {
    if (newDesignation.trim()) {
      setDesignations([
        ...designations,
        { id: Date.now(), name: newDesignation.trim() }
      ]);
      setNewDesignation('');
    }
  };

  const handleDeleteDesignation = (id: number) => {
    setDesignations(designations.filter(d => d.id !== id));
  };

  // const handleSave = () => {
  //   console.log('Saved designations:', designations);
  //   onOpenChange(false);
  // };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl mx-auto max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-lg font-medium text-gray-600 ">Add Designation</DialogTitle>
          
        </DialogHeader>

        <div className="space-y-6">
          {/* Add New Designation */}
          <div className="space-y-2">
            <Label htmlFor="designation" className="text-sm font-medium text-gray-500">Add Designation</Label>
            <br />
            <div className="flex gap-2">
              <Input
                id="designation"
                placeholder="e.g. Supervisor"
                value={newDesignation}
                onChange={(e) => setNewDesignation(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleAddDesignation()}
              />
              
              <Button 
              className='border-[#7ba83c] border-2  px-6'
                variant="outline"
                onClick={handleCancel}
              >
                Close
              </Button>
              <Button
                onClick={handleAddDesignation}
                className="bg-[#7ba83c] hover:bg-[#6c973a] text-white px-6"
              >
                Save
              </Button>
            </div>
          </div>

          {/* Designations Table */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                <div className="col-span-2">#</div>
                <div className="col-span-8">Designation Name</div>
                <div className="col-span-2">Action</div>
              </div>
            </div>
            
            <div className="divide-y min-h-[15rem] max-h-60 overflow-y-auto">
              {designations.map((designation, index) => (
                <div key={designation.id} className="px-4 py-3">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-2 text-sm text-gray-600">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="col-span-8 text-sm">
                      {designation.name}
                    </div>
                    <div className="col-span-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteDesignation(designation.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t">
            <span className="text-sm text-gray-500">10 of 100 entries</span>
            {/* <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                size="sm"
                className="bg-[#7ba83c] hover:bg-[#6c973a] text-white"
              >
                Submit
              </Button>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddDesignationModal;