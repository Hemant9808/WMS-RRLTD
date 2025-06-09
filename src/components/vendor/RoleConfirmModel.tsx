import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface RoleConfirmModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RoleConfirmModal = ({ open, onOpenChange }: RoleConfirmModalProps) => {
  const handleConfirm = () => {
    console.log('Role change confirmed');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto p-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900">Confirm Role Change</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                Switching from Employee to Client will apply new permissions. Confirm to continue.
              </p>
            </div>
          </div>

          {/* Confirm Button */}
          <Button
            onClick={handleConfirm}
            className="w-full bg-[#7ba83c] hover:bg-[#6c973a] text-white"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoleConfirmModal;