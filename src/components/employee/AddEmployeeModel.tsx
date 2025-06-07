import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Upload, X, Edit } from 'lucide-react';
import QuickSearchModal from './QuickSearchModel';
import AddDesignationModal from './AddDesignationModel';
import ImportProductsModal from './ImportProductModel';
import RoleConfirmModal from './RoleConfirmModel';
import upload from '@/assets/upload.png';
// import QuickSearchModal from './QuickSearchModal';
// import AddDesignationModal from './AddDesignationModal';
// import ImportProductsModal from './ImportProductsModal';
// import RoleConfirmModal from './RoleConfirmModal';

interface AddEmployeeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddEmployeeModal = ({ open, onOpenChange }: AddEmployeeModalProps) => {
  console.log(open);
  const [formData, setFormData] = useState({
    employeeId: '#12345',
    employeeName: '',
    email: '',
    contact: '',
    designation: '',
    department: '',
    status: 'Active',
    accessForLogin: false,
    roles: '',
    loginEmail: '',
    password: ''
  });

  const [showQuickSearch, setShowQuickSearch] = useState(false);
  const [showAddDesignation, setShowAddDesignation] = useState(false);
  const [showImportProducts, setShowImportProducts] = useState(false);
  const [showRoleConfirm, setShowRoleConfirm] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // onOpenChange(false);
    setShowRoleConfirm(true);
  };

  const handleCancel = () => {
    setFormData({
      employeeId: '#12345',
      employeeName: '',
      email: '',
      contact: '',
      designation: '',
      department: '',
      status: 'Active',
      accessForLogin: false,
      roles: '',
      loginEmail: '',
      password: ''
    });
    setProfileImage(null);
    onOpenChange(false);
  };

  return (
    <div>
      {/* <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto"> */}
          <div className="flex overflow-scroll text-gray-500 flex-row items-center justify-between space-y-0 pb-4">
            <div className="text-lg font-medium">Add Employee</div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Upload Employee Photo */}
            <div className="space-y-2 border rounded-lg">
              <div className='relative py-2 flex flex-col'>
                              <Label className="text-sm ml-2 text-gray-500 font-medium">Upload Employee Photo</Label>
                              <div className='absolute bottom-0 h-[0.01rem]  w-[100%] bg-gray-200'></div>
              </div>
              <br className='  mt-4 w-[100%]' />
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    />
                  ) : (
                    <div className="w-[10rem]   border-gray-300 flex flex-col items-center justify-center bg-gray-50">
                                    <img src={upload} alt="" />

                      <div className="w-8 h-8  rounded-full flex items-center justify-center mb-1">
                        <Upload className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Employee ID */}
            <div className="space-y-2">
              <Label htmlFor="employeeId" className="text-sm text-gray-500 font-medium">Employee ID</Label>
              <div className="relative">
                <Input
                  id="employeeId"
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  className="pr-16"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="h-6 w-6 p-0 border-[#7ba83c] text-[#7ba83c] hover:bg-[#7ba83c] hover:text-white"
                    onClick={() => setShowQuickSearch(true)}
                  >
                    <Search className="h-3 w-3" />
                  </Button> */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Employee Name */}
            <div className="space-y-2">
              <Label htmlFor="employeeName" className="text-sm text-gray-500 font-medium">Employee Name</Label>
              <Input
                id="employeeName"
                placeholder="Full Name"
                value={formData.employeeName}
                onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-gray-500 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <Label htmlFor="contact" className="text-sm text-gray-500 font-medium">Contact</Label>
              <Input
                id="contact"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <Label htmlFor="designation" className="text-sm text-gray-500 font-medium">Designation</Label>
              <div className="flex gap-2">
                <Select value={formData.designation} onValueChange={(value) => setFormData({ ...formData, designation: value })}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supervisor">Supervisor</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="storekeeper">Store Keeper</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAddDesignation(true)}
                  className="px-3 border-[#7ba83c] text-[#7ba83c] hover:bg-[#7ba83c] hover:text-white"
                >
                  Add
                </Button>
              </div>
            </div>

            {/* Department */}
            <div className="space-y-2">
              <Label htmlFor="department" className="text-sm font-medium text-gray-500">Department</Label>
              <div className="flex gap-2">
                <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="sm"
                  className="px-3 border-[#7ba83c] text-[#7ba83c] hover:bg-[#7ba83c] hover:text-white"
                >
                  Add
                </Button>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status" className="text-sm font-medium text-gray-500">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Access For Login */}
            <div className="flex items-center justify-between py-2">
              <Label htmlFor="accessForLogin" className="text-sm font-medium text-gray-500">Access For Login</Label>
              <Switch
                id="accessForLogin"
                checked={formData.accessForLogin}
                onCheckedChange={(checked) => setFormData({ ...formData, accessForLogin: checked })}
              />
            </div>

            {/* Conditional Login Fields */}
            {formData.accessForLogin && (
              <>
                {/* Roles */}
                <div className="space-y-2">
                  <Label htmlFor="roles" className="text-sm font-medium text-gray-500">Roles</Label>
                  <Select value={formData.roles} onValueChange={(value) => setFormData({ ...formData, roles: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="employee">Employee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email for Login */}
                <div className="space-y-2">
                  <Label htmlFor="loginEmail" className="text-sm font-medium text-gray-500">Email</Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    value={formData.loginEmail}
                    onChange={(e) => setFormData({ ...formData, loginEmail: e.target.value })}
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-500">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value })}
                  
                  />
                  {/* <Select value={formData.password} onValueChange={(value) => setFormData({ ...formData, password: value })}>
                    <SelectTrigger> 
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto Generate</SelectItem>
                      <SelectItem value="manual">Manual</SelectItem>
                    </SelectContent>
                  </Select> */}
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={handleCancel}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-[#7ba83c] hover:bg-[#6c973a] text-white"
              >
                Submit
              </Button>
            </div>
          </div>
        {/* </DialogContent>
      </Dialog> */}

      {/* Sub-modals */}
      <QuickSearchModal
        open={showQuickSearch}
        onOpenChange={setShowQuickSearch}
        onImportClick={() => {
          setShowQuickSearch(false);
          setShowImportProducts(true);
        }}
      />

      <AddDesignationModal
        open={showAddDesignation}
        onOpenChange={setShowAddDesignation}
      />

      <ImportProductsModal
        open={showImportProducts}
        onOpenChange={setShowImportProducts}
      />

      <RoleConfirmModal
        open={showRoleConfirm}
        onOpenChange={setShowRoleConfirm}
      />
    </div>
  );
};

export default AddEmployeeModal;