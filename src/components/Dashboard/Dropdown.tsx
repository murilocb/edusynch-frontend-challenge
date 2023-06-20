import { useState } from 'react';
import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoLogOutOutline } from 'react-icons/io5';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Redirect to main page when logout
    router.push('/');
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 mt-1 rounded-full hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
      >
        <MdOutlineKeyboardArrowDown />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded shadow-lg">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <IoLogOutOutline className='mt-1 mr-2'/> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
