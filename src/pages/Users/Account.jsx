import { Helmet } from 'react-helmet-async';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseUser from '../../Hooks/UseUser';
import { AiOutlinePhone } from 'react-icons/ai';
import { TfiEmail } from 'react-icons/tfi';
import UseAuth from '../../Hooks/UseAuth';
import './Card.css'; // Import custom styles

const Account = () => {
  const { user } = UseAuth();
  const { userData, isLoading } = UseUser();
  // console.log('userData', userData);

  // Handler for "Add Taka" button click
  const click = () => {
    console.log('add money');
  };

  // Show loading message while user data is being fetched
  if (isLoading) {
    return <p className='text-center py-32'>Loading user info...</p>;
  }

  return (
    <div className='py-32 bg-primary-bg-image px-2 md:flex gap-1 justify-center'>
      <Helmet>
        <title>semicolonff | Account</title>
      </Helmet>

      {/* Account section  */}
      <div className='flex justify-center '>
        <div className='card-gradient w-72 h-44 rounded-xl text-white p-5 shadow-lg flex flex-col '>
          <div className='text-lg font-semibold tracking-widest'>
            Semicolon Pay
          </div>
          <div className='text-2xl font-bold tracking-wide mt-6 mb-6'>
            00 TK
          </div>
          <div className=''>
            <div className='flex gap-2 justify-end '>
              <Link to='/users/addmony'>
                <button className='bg-white text-blue-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-100 transition'>
                  Add Taka
                </button>
              </Link>
              <Link to='/users/withdraw'>
                <button className='bg-white text-red-600 text-xs font-medium px-3 py-1 rounded-full hover:bg-red-100 transition'>
                  Withdraw
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* User Details section  */}

      <div className='flex justify-center mt-10 md:-mt-4'>
        <div className='w-[350px] h-[200px] rounded-xl text-white p-5 shadow-lg flex flex-col justify-between'>
          <div>
            {/* Name */}
            <h2 className='text-xl font-bold text-yellow-300 tracking-wide mb-2'>
              {user ? user.displayName || 'Semicolon ;' : 'Semicolon ;'}
            </h2>
            <p className='text-sm text-white/70 mb-4'>
              {userData?.role || 'Regular User'}
            </p>
          </div>

          {/* Contact Info */}
          <div className='space-y-2 text-sm'>
            {/* Phone */}
            <div className='flex items-center space-x-2'>
              <span className='text-yellow-300'>📞</span>
              <span>{userData?.phone || '+880 123XXXXXX'}</span>
            </div>
            {/* Email */}
            <div className='flex items-center space-x-2'>
              <span className='text-yellow-300'>📧</span>
              <span>{user ? user.email : 'example@gmail.com'}</span>
            </div>
            {/* UID */}
            <div className='flex items-center space-x-2'>
              <span className='text-yellow-300'>ID</span>
              <span>{user?.uid || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
