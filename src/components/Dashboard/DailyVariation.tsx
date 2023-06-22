import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface ChartData {
  date: string;
  value: number;
}

const DailyVariation: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Fetch chart data from API
    // const fetchChartData = async () => {
    //   const response = await fetch('/api/chart');
    //   const data = await response.json();
    //   setChartData(data);
    // };
    // fetchChartData();
    // and set it to the `chartData` state variable.
    // For demonstration purposes, I'll use a static array of data here:
    const staticChartData: ChartData[] = [
      { date: '2023-06-18', value: 100 },
      { date: '2023-06-19', value: 120 },
      { date: '2023-06-20', value: 90 },
      { date: '2023-06-21', value: 110 },
      { date: '2023-06-22', value: 130 },
    ];
    setChartData(staticChartData);
  }, []);

  return (
    <div className="bg-white rounded-md h-28 w-64 ml-6 md:w-592 flex flex-row mt-10 md:mt-2 md:flex-row md:items-center shadow-md">
      <div className="ml-1 mt-3 md:mt-1">
        <h3 className="text-color-secondary-500 text-sm md:text-xs font-roboto flex flex-col">
          Daily Variation
          <div className="flex mb-2">
            <Image
              className="h-6 w-6 mt-2"
              alt="NftNews"
              src="/images/ETHmini.png"
              width={32}
              height={32}
              priority
            />
            <span className="mt-3 ml-2 font-roboto text-sm">ETH</span>
          </div>
          <span className="font-roboto text-sm text-green-500">+5,65%</span>
        </h3>
      </div>
      <div className="mt-2 w-36 md:w-72">
        <ResponsiveContainer width="100%" height={95}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F4CC8F" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F4CC8F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#F4CC8F"
              fill="url(#areaGradient)"
              strokeWidth={2}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyVariation;
