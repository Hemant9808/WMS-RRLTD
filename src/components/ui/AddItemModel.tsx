import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2 } from 'lucide-react';

interface Item {
  id: number;
  name: string;
  isEditing?: boolean;
}

interface AddItemModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  placeholder?: string;
  label?: string;
  initialItems?: Item[];
}

const AddItemModal = ({
  open,
  onOpenChange,
  title,
  placeholder = 'e.g. Item name',
  label = 'Add Item',
  initialItems = [],
}: AddItemModalProps) => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([
        ...items,
        { id: Date.now(), name: newItem.trim(), isEditing: false },
      ]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditToggle = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };

  const handleEditChange = (id: number, value: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, name: value } : item
      )
    );
  };

  const handleEditSubmit = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl mx-auto max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-lg font-medium text-gray-600">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Input Area */}
          <div className="space-y-2">
            <Label htmlFor="item-input" className="text-sm font-medium text-gray-500">
              {label}
            </Label>
            <div className="flex gap-2">
              <Input
                id="item-input"
                placeholder={placeholder}
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="flex-1"
                onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
              />
              <Button
                className="border-[#7ba83c] border-2 px-6"
                variant="outline"
                onClick={handleCancel}
              >
                Close
              </Button>
              <Button
                onClick={handleAddItem}
                className="bg-[#7ba83c] hover:bg-[#6c973a] text-white px-6"
              >
                Save
              </Button>
            </div>
          </div>

          {/* Item List */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                <div className="col-span-2">#</div>
                <div className="col-span-8">Name</div>
                <div className="col-span-2">Action</div>
              </div>
            </div>

            <div className="divide-y min-h-[15rem] max-h-60 overflow-y-auto">
              {items.map((item, index) => (
                <div key={item.id} className="px-4 py-3">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-2 text-sm text-gray-600">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div
                      className="col-span-8 text-sm"
                      onDoubleClick={() => handleEditToggle(item.id)}
                    >
                      {item.isEditing ? (
                        <Input
                          value={item.name}
                          onChange={(e) =>
                            handleEditChange(item.id, e.target.value)
                          }
                          onBlur={() => handleEditSubmit(item.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleEditSubmit(item.id);
                          }}
                          autoFocus
                          className="text-sm"
                        />
                      ) : (
                        item.name
                      )}
                    </div>
                    <div className="col-span-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteItem(item.id)}
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

          {/* Footer (optional info or pagination) */}
          <div className="flex items-center justify-between pt-4 border-t">
            <span className="text-sm text-gray-500">
              {items.length} of 100 entries
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddItemModal;
