
// import Qr1 from '../../assets/qr1.png';
// const QRScannerModal = ({ onClose }: { onClose: () => void }) => {
//   return (
//     <div className="fixed  inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
//       <div className="relative rounded-lg shadow-xl p-2 w-[400px] h-[280px] flex items-center justify-center ">
//         <div className="absolute inset-0 rounded-lg border-4 pointer-events-none" />
//         <img
//         src={Qr1}
//           alt="Scan Background"
//           className="absolute inset-0 w-full h-full object-cover rounded-lg"
//         />
     

//         <button
//           className="absolute top-2 right-2  rounded-full p-1 shadow"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QRScannerModal;



import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Qr1 from "../../assets/Qr1.png"

const QRScannerDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent className="bg-transparent border-none shadow-none p-0 max-w-[600px] h-[350px] flex items-center justify-center">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <img
            src={Qr1}
            alt="Scan Background"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none" />

          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 hover:bg-white text-black rounded-full"
            >
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QRScannerDialog
