import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Figma', value: 93, color: '#818CF8' },
  { name: 'Sketch', value: 85, color: '#84CC16' },
  { name: 'XD', value: 53, color: '#FB923C' },
  { name: 'Photoshop', value: 43, color: '#22D3EE' },
  { name: 'Illustrator', value: 26, color: '#A78BFA' },
];

const TopSellingCategories = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">
          Top 5 Selling Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-sm text-gray-600">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSellingCategories;