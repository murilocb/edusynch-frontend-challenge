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
      <div className="flex flex-col lg:flex-row">
        <div className="mt-8 lg:mt-0">
          <Balance />
        </div>
        <div className="md:mt-8 md:w-full lg:w-auto flex space-x-0">
          <DailyVariation />
          <Image
            className="md:h-36 md:w-auto mt-8 md:-mt-0 w-60 h-36"
            alt="NftNews"
            src="/images/NftNews.png"
            width={340}
            height={122}
            priority
          />
        </div>
        <div className="md:absolute ml-4 md:mt-48 md:h-96">
          <MyWallet />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Dashboard;
