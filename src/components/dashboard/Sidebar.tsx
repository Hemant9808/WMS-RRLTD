import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Store,
  HelpCircle,
  Settings,
  LogOut,
} from 'lucide-react';
import logo2 from '@/assets/logo2.png'; 
const mainNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Employee', href: '/dashboard/employee' },
  { icon: Store, label: 'Vendor', href: '/dashboard/vendor' },
];

const bottomNavItems = [
  { icon: HelpCircle, label: 'Help', href: '/dashboard/help' },
  { icon: Settings, label: 'Setting', href: '/dashboard/settings' },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="flex h-screen w-[14rem] flex-col  bg-[#F0F4F7]">
      <div className="p-6">
        {/* <Logo size={32} />
        img
         */}
         <img src={logo2} alt="" />
      </div>

      <div className="flex-1 space-y-2 px-3">
        <div className="mb-4 px-4 text-md font-medium text-gray-500">
          Main Menu
        </div>
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium',
              location.pathname === item.href
                ? 'bg-[#7ba83c] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </div>

      <div className="space-y-1 px-3">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-3 px-2">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="text-sm font-medium">Jatin Tyagi</div>
            <div className="text-xs text-gray-500">Manager</div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;