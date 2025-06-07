import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {  Upload, Download } from 'lucide-react';

interface ImportProductsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImportProductsModal = ({ open, onOpenChange }: ImportProductsModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log('Importing file:', selectedFile.name);
      // Handle file import logic here
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    onOpenChange(false);
  };

  const downloadSampleFile = () => {
    // Create a sample CSV content
    const csvContent = "Employee ID,Name,Email,Contact,Designation,Department,Status\n#12345,John Doe,john@example.com,9876543210,Manager,IT,Active";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample_employee_import.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg mx-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-lg font-medium">Import Products</DialogTitle>
          
        </DialogHeader>

        <div className="space-y-9">
          {/* File Upload Area */}
          <div className="relative">
            <div className="border-2 border-dashed border-[#7ba83c] bg-[#f9fff0] rounded-lg p-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-[#7ba83c] rounded-full flex items-center justify-center">
                  <Upload className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {selectedFile ? selectedFile.name : 'Click to select a file'}
                  </p>
                  {!selectedFile && (
                    <p className="text-xs text-gray-500 mt-1">
                      Supports: CSV, Excel files
                    </p>
                  )}
                </div>
              </div>
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          

          {/* Download Sample File */}
          <Button
            onClick={downloadSampleFile}
            className="w-full p-1 bg-[#7ba83c] hover:bg-[#6c973a] text-white font-thin text-[0.8rem] flex items-center justify-center gap-2"
          >
            <Download className="h-6  " />
            Download Sample Import File
          </Button>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              // disabled={!selectedFile}
              className="flex-1 bg-[#7ba83c] hover:bg-[#6c973a] text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImportProductsModal;