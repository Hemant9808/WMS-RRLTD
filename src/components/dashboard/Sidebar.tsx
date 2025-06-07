// import { Link, useLocation } from 'react-router-dom';
// import { cn } from '@/lib/utils';
// import {
//   LayoutDashboard,
//   Users,
//   Store,
//   HelpCircle,
//   Settings,
//   LogOut,
// } from 'lucide-react';
// import logo2 from '@/assets/logo2.png'; 
// const mainNavItems = [
//   { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
//   { icon: Users, label: 'Employee', href: '/dashboard/employee' },
//   { icon: Store, label: 'Vendor', href: '/dashboard/vendor' },
// ];

// const bottomNavItems = [
//   { icon: HelpCircle, label: 'Help', href: '/dashboard/help' },
//   { icon: Settings, label: 'Setting', href: '/dashboard/settings' },
// ];

// const Sidebar = () => {
//   const location = useLocation();
  
//   return (
//     <div className="flex h-screen w-[14rem] flex-col  bg-[#F0F4F7]">
//       <div className="p-6">
//         {/* <Logo size={32} />
//         img
//          */}
//          <img src={logo2} alt="" />
//       </div>

//       <div className="flex-1 space-y-2 px-3">
//         <div className="mb-4 px-4 text-md font-medium text-gray-500">
//           Main Menu
//         </div>
//         {mainNavItems.map((item) => (
//           <Link
//             key={item.href}
//             to={item.href}
//             className={cn(
//               'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium',
//               location.pathname === item.href
//                 ? 'bg-[#7ba83c] text-white'
//                 : 'text-gray-700 hover:bg-gray-100'
//             )}
//           >
//             <item.icon className="h-5 w-5" />
//             {item.label}
//           </Link>
//         ))}
//       </div>

//       <div className="space-y-1 px-3">
//         {bottomNavItems.map((item) => (
//           <Link
//             key={item.href}
//             to={item.href}
//             className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
//           >
//             <item.icon className="h-5 w-5" />
//             {item.label}
//           </Link>
//         ))}
//       </div>

//       <div className="border-t p-4">
//         <div className="flex items-center gap-3 px-2">
//           <img
//             src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
//             alt="Profile"
//             className="h-10 w-10 rounded-full object-cover"
//           />
//           <div className="flex-1">
//             <div className="text-sm font-medium">Jatin Tyagi</div>
//             <div className="text-xs text-gray-500">Manager</div>
//           </div>
//           <button className="text-gray-400 hover:text-gray-600">
//             <LogOut className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Store,
  HelpCircle,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import logo2 from '@/assets/logo2.png';
import { useState, useEffect } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
 const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>

    <div className="md:flex hidden h-screen w-[14rem] flex-col  bg-[#F0F4F7]">
      <div className="p-6">
        
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
            <div className="text-sm flex w-[6rem] font-medium">Jatin Tyagi</div>
            <div className="text-xs text-gray-500">Manager</div>
          </div>
          <button onClick={()=>navigate('/auth/login')} className=" bg-green-600 text-xs text-white rounded-lg px-2 py-1 ">
            Login
            {/* <LogOut className="h-5 w-5" /> */}
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Hamburger Button */}
      <div className='md:hidden'>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed right-4 top-4 z-50 rounded-md bg-[#7ba83c] p-2 text-white md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      )}

      {/* Desktop Collapse Button */}
      {!isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed left-64 top-4 z-30 hidden rounded-md bg-[#7ba83c] p-2 text-white transition-all duration-300 md:block"
          style={{ left: collapsed ? '4rem' : '14rem' }}
        >
          {collapsed ? (
            <Menu className="h-6 w-6" />
          ) : (
            <X className="h-6 w-6" />
          )}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 z-40 flex h-screen flex-col bg-[#F0F4F7] transition-all duration-300',
          isMobile
            ? isOpen
              ? 'w-[14rem] translate-x-0'
              : '-translate-x-full'
            : collapsed
            ? 'w-[4rem]'
            : 'w-[14rem]'
        )}
      >
        <div className="p-6">
          <img 
            src={logo2} 
            alt="Logo" 
            className={cn('transition-all duration-300', collapsed ? 'h-8 w-8' : 'h-auto w-full')}
          />
        </div>

        <div className="flex-1 space-y-2 px-3">
          {!collapsed && (
            <div className="mb-4 px-4 text-md font-medium text-gray-500">
              Main Menu
            </div>
          )}
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={closeSidebar}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium',
                location.pathname === item.href
                  ? 'bg-[#7ba83c] text-white'
                  : 'text-gray-700 hover:bg-gray-100',
                collapsed ? 'justify-center' : ''
              )}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>

        <div className="space-y-1 px-3">
          {bottomNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={closeSidebar}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100',
                collapsed ? 'justify-center' : ''
              )}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>

        <div className="border-t p-4">
          <div className={cn("flex items-center", collapsed ? "justify-center" : "gap-3")}>
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
            {!collapsed && (
              <div className="flex-1">
                <div className="text-sm font-medium">Jatin Tyagi</div>
                <div className="text-xs text-gray-500">Manager</div>
              </div>
            )}
           <button onClick={()=>navigate('/auth/login')} className=" bg-green-600 text-xs text-white rounded-lg px-2 py-1 ">
            Login
            {/* <LogOut className="h-5 w-5" /> */}
          </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      </div>
    </>
  );
};

export default Sidebar;