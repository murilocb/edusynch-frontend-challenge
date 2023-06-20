import Sidebar from '@/components/Dashboard/Sidebar';
import UserAvatar from '@/components/Dashboard/UserAvatar';

const Dashboard = () => {
  return (
    <main className="w-full flex">
      <Sidebar />
      <UserAvatar />
    </main>
  );
};

export default Dashboard;
