import { ReactNode } from 'react';
import { HammerIcon as HangerIcon } from 'lucide-react';
import loginPageImage from '@/assets/loginPageImage.png';
import logo from '@/assets/logo.png';
interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* Left sidebar */}
      <div className="relative flex w-full flex-col items-start justify-between bg-[#f7f7f7] p-8 md:w-2/5 md:max-w-[500px]">
        <div className="flex w-full flex-col items-start space-y-2">
          {/* Logo */}
          {/* <div className="mb-10">
            <HangerIcon className="h-12 w-12 text-[#7ba83c]" />
            <span className="text-2xl font-bold text-[#7ba83c]">RRLTO</span>
          </div>
           */}
           <img className='w-[6rem] rounded-md mb-[3rem]' src={logo} alt="" />
          {/* Welcome text */}
          <h1 className="text-3xl font-semibold text-[#333333]">Welcome!</h1>
          <h2 className="text-3xl font-medium text-[#333333]">First things first...</h2>
          <p className="text-xs text-gray-500">
            Create a Profile to personalize how you'll appear to collaborators
          </p>
        </div>

        {/* Illustration */}
        <div className="mt-6 w-full max-w-md">
          <img 
            src={loginPageImage} 
            alt="Inventory management illustration" 
            className="w-full"
          />
        </div>
      </div>
      
      {/* Right content */}
      <div className="flex w-full  flex-1 flex-col items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-md space-y-6">
          {children}
        </div>
        
        {/* Footer */}
        <div className="mb-4 absolute bottom-0 pt-8 text-center text-xs text-gray-500">
          © All Rights Reserved. Designed & Developed by Softhear
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;