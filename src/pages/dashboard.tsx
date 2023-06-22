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
      <div className="flex flex-col lg:flex-row lg:flex-1 lg:ml-24 lg:space-x-12">
        <div className="mt-8 lg:mt-0">
          <Balance />
        </div>
        <div className="md:mt-8 md:w-full lg:w-auto">
          <DailyVariation />
        </div>
        <div className="lg:block lg:self-end">
          <Image
            className="-mt-2 h-40 w-592"
            alt="NftNews"
            src="/images/NftNews.png"
            width={340}
            height={122}
            priority
          />
        </div>
      <div className="w-full ml-12 mt-8 lg:mt-0 lg:absolute lg:ml-56">
        <MyWallet />
      </div>
      </div>
      <Footer />
    </main>
  );
};

export default Dashboard;
