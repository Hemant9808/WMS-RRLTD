import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Search } from 'lucide-react';

interface QuickSearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImportClick: () => void;
}

const QuickSearchModal = ({ open, onOpenChange, onImportClick }: QuickSearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg mx-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-lg font-medium">Quick Search</DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Search Results Header */}
          <div className="flex items-center justify-between text-sm font-medium text-gray-600 border-b pb-2">
            <span>Add Designation</span>
            <span>Action</span>
          </div>

          {/* Search Result Item */}
          <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">📋</span>
              </div>
              <span className="text-sm font-medium">Designation Name</span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-[#7ba83c] text-[#7ba83c] hover:bg-[#7ba83c] hover:text-white"
            >
              Add
            </Button>
          </div>

          {/* Illustration */}
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-32 h-32 bg-blue-50 rounded-lg flex items-center justify-center mb-4 relative">
              <div className="w-16 h-12 bg-blue-500 rounded border-2 border-white relative">
                <div className="absolute -right-2 -top-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center max-w-xs">
              Search for existing designations or add new ones
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={onImportClick}
              className="flex-1 bg-[#7ba83c] hover:bg-[#6c973a] text-white"
            >
              Import
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickSearchModal;