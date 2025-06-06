import { HammerIcon as HangerIcon } from 'lucide-react';

interface LogoProps {
  size?: number;
}

const Logo = ({ size = 24 }: LogoProps) => {
  return (
    <div className="flex items-center gap-1">
      <HangerIcon className="text-[#7ba83c]" size={size} />
      <span className={`font-bold text-[#7ba83c] ${size > 20 ? 'text-xl' : 'text-base'}`}>
        RRLTO
      </span>
    </div>
  );
};

export default Logo;