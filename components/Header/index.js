import { UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useAuth } from "../Auth";

export default function Header() {
  const { token } = useAuth()
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <div class='flex items-center flex-shrink-0 w-full h-16 px-10 bg-white sticky top-0 left-0 z-20 shadow'>
      <svg
        class='w-8 h-8 text-indigo-600 stroke-current'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
        />
      </svg>
      <input
        class='flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring'
        type='search'
        placeholder='Search for anything…'
      />
      <div class='ml-10'>
        <a class='mx-2 text-sm font-semibold text-indigo-700' href='#'>
          Projects
        </a>
        <a
          class='mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700'
          href='#'
        >
          Team
        </a>
        <a
          class='mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700'
          href='#'
        >
          Activity
        </a>
      </div>
      {token && <button class='flex items-center justify-center w-8 h-8 ml-auto rounded-full cursor-pointer text-indigo-600 relative'>
        <svg onClick={e => setShowMenu(!showMenu)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
        {showMenu && <div className='border border-gray-300 bg-white absolute flex flex-col shadow-md rounded' style={{ top: 48, right: -40, zIndex: 10 }}>
          <div className='w-full flex items-center text-center justify-center px-10 py-2 bg-white hover:bg-gray-200 transition duration-200 font-medium border-b border-gray-300'>Quotations</div>
          <div className='w-full flex items-center text-center justify-center px-10 py-2 bg-white hover:bg-gray-200 transition duration-200 font-medium border-b border-gray-300'>Notifications</div>
          <div className='w-full flex items-center text-center justify-center px-10 py-2 bg-white hover:bg-gray-200 transition duration-200 font-medium border-b border-gray-300'>Account</div>
          <div className='w-full flex items-center text-center justify-center px-10 py-2 bg-white hover:bg-gray-200 transition duration-200 font-medium'>Signout</div>
        </div>}
      </button>}
    </div>
  );
}
