import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Dropdown from './Dropdown';

interface UserData {
  avatar: string;
  name: string;
}

const UserAvatar: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData>('/api/user'); // Endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Fake avatar and name if have API connect to endpoint remove this
        const fallbackData: UserData = {
          avatar: '/images/Avatar.png',
          name: 'User',
        };
        setUserData(fallbackData);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-16 bg-white">
      <div>
        <Image
          src="/svgs/CoinSynch.svg"
          alt="CoinSynch Logo"
          className="ml-20"
          width={124}
          height={21}
          priority
        />
      </div>
      {userData ? (
        <div className="flex justify-end ml-auto mr-20">
          <Image
            src={userData.avatar}
            alt={userData.name}
            className="rounded-full"
            width={40}
            height={40}
            priority
          />
          <span className="ml-2 mt-2 text-gray-800">{userData.name}</span>
          <Dropdown />
        </div>
      ) : (
        <div className="flex justify-end ml-auto mr-20">
          <span className="text-gray-800">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
