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
    <div className="flex items-center justify-center w-full h-16 bg-white shadow-md mb-px">
      <div className="md:ml-10 ml-auto -mr-24">
        <Image
          src="/svgs/CoinSynch.svg"
          alt="CoinSynch Logo"
          width={124}
          height={21}
          priority
        />
      </div>
      <div className="flex justify-end ml-auto mr-4 md:mr-12">
        {userData ? (
          <>
            <div className="md:flex items-center ml-4">
              <Image
                src={userData.avatar}
                alt={userData.name}
                className="rounded-full"
                width={40}
                height={40}
                priority
              />
              <span className="hidden md:flex ml-2 text-gray-800">{userData.name}</span>
            </div>
            <div className="md:flex flex items-center">
              <Dropdown />
            </div>
          </>
        ) : (
          <span className="text-gray-800">Loading...</span>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
