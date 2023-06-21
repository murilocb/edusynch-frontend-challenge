import Balance from '@/components/Dashboard/Balance';
import DailyVariation from '@/components/Dashboard/DailyVariation';
import { Footer } from '@/components/Dashboard/Footer';
import MyWallet from '@/components/Dashboard/MyWallet';
import Sidebar from '@/components/Dashboard/Sidebar';
import UserAvatar from '@/components/Dashboard/UserAvatar';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <main className="flex flex-wrap bg-slate-100">
      <UserAvatar />
      <Sidebar />
      <div className="flex flex-row lg:flex-row lg:mt-10 lg:space-x-12">
        <div className="lg:ml-24">
          <Balance />
        </div>
        <div className="w-full lg:w-auto">
          <DailyVariation />
        </div>
        <div className="hidden lg:block">
          <Image
            className="-mt-2 h-40 w-592"
            alt="NftNews"
            src="/images/NftNews.png"
            width={340}
            height={122}
            priority
          />
        </div>
      </div>
      <div className="absolute mt-72 ml-56">
        <MyWallet />
      </div>
      <Footer />
    </main>
  );
};

export default Dashboard;
