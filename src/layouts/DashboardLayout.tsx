import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/dashboard/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex max-h-screen overflow-hidden bg-[#F0F4F7]">
      <Sidebar />
      <main className="flex-1 overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;