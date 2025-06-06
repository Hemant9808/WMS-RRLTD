import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend: 'up' | 'down' | 'neutral';
  trendText: string;
}

const StatCard = ({ title, value, icon, trend, trendText }: StatCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-semibold">{value}</div>
          <div className="mt-1 text-sm text-gray-500">{title}</div>
        </div>
        <div className="rounded-lg bg-gray-100/50 p-3">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-xs">
        {trend === 'up' && <ArrowUpIcon className="h-3 w-3 text-green-500" />}
        {trend === 'down' && <ArrowDownIcon className="h-3 w-3 text-red-500" />}
        <span className="text-gray-500">{trendText}</span>
      </div>
    </Card>
  );
};

export default StatCard;