import {
  Package2,
  PackageOpen,
  AlertTriangle,
  Users,
  Store,
  UserCheck,
  PackageSearch,
  Package,
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import TopSellingCategories from '@/components/dashboard/TopSellingCategories';
import TopBuyingVendors from '@/components/dashboard/TopBuyingVendors';
import ReportsTable from '@/components/dashboard/ReportsTable';

const Dashboard = () => {
  return (
    <div className="flex-1 space-y-8 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button className="rounded-lg bg-[#7ba83c] px-4 py-2 text-sm font-medium text-white hover:bg-[#6c973a]">
          Stock Adjustment
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Stock In"
          value="123456"
          icon={<Package2 className="h-6 w-6 text-[#7ba83c]" />}
          trend="down"
          trendText="Less than last month"
        />
        <StatCard
          title="Total Stock Out"
          value="123456758"
          icon={<PackageOpen className="h-6 w-6 text-orange-500" />}
          trend="down"
          trendText="Less than last month"
        />
        <StatCard
          title="Total Damage"
          value="272,866"
          icon={<AlertTriangle className="h-6 w-6 text-red-500" />}
          trend="down"
          trendText="Less than last month"
        />
        <StatCard
          title="New Leads"
          value="17"
          icon={<Users className="h-6 w-6 text-purple-500" />}
          trend="down"
          trendText="Less than last month"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Vendors"
          value="250"
          icon={<Store className="h-6 w-6 text-pink-500" />}
          trend="down"
          trendText="Less than last month"
        />
        <StatCard
          title="Total Customer"
          value="4,439"
          icon={<UserCheck className="h-6 w-6 text-yellow-500" />}
          trend="down"
          trendText="Less than last month"
        />
        <StatCard
          title="Future Leads"
          value="272,8662"
          icon={<PackageSearch className="h-6 w-6 text-green-500" />}
          trend="down"
          trendText="Less than last month"
        />
        <StatCard
          title="Low Stock"
          value="17"
          icon={<Package className="h-6 w-6 text-blue-500" />}
          trend="down"
          trendText="Less than last month"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TopSellingCategories />
        <TopBuyingVendors />
      </div>
        <ReportsTable />
    </div>
  );
};

export default Dashboard;