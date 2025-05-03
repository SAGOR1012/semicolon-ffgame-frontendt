import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseUser from '../../Hooks/UseUser'; // ✅ Import custom hook to fetch user data
import { AiOutlinePhone } from 'react-icons/ai';
import { TfiEmail } from 'react-icons/tfi';

const Account = () => {
  const { userData, isLoading } = UseUser(); // ✅ Fetch logged-in user data and loading state

  // Handler for "Add Taka" button click
  const click = () => {
    console.log('add mony');
  };

  // Show loading message while user data is being fetched
  if (isLoading) {
    return <p className='text-center py-32'>Loading user info...</p>;
  }

  return (
    <div className='py-32 bg-primary-bg-image px-2 md:flex gap-1 justify-center'>
      {/* Helmet for setting the page title */}
      <Helmet>
        <title>semicolonff | Account</title>
      </Helmet>

      {/* Account balance section */}
      <div className='rounded-sm bg-white text-primary-content mb-10'>
        <div className='stat'>
          <div className='stat-title'>Account balance</div>
          <div className='stat-value text-blue-500'>00 TAKA</div>
          <div className='stat-actions flex gap-3 text-white'>
            {/* Link to add money */}
            <Link to='/users/addmony'>
              <button
                onClick={click}
                className='p-2 border-2 rounded-md border-green-500 text-green-500 font-bold md:text-xl'>
                Add Taka
              </button>
            </Link>

            {/* Link to withdraw money */}
            <Link to='/users/withdraw'>
              <button className='p-2 border-2 rounded-md border-warning text-warning font-bold md:text-xl'>
                Withdraw
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* User profile section */}
      <div className='rounded-md p-2 max-h-40 flex space-x-6 bg-white text-pragraph'>
        {/* User avatar */}
        <div className='flex items-center justify-center text-5xl'>
          <span className='text-yellow-500'>
            <FaRegUser />
          </span>
        </div>

        {/* User details */}
        <div className='flex flex-col gap-2'>
          {/* User name and role */}
          <div>
            <h2 className='text-2xl font-semibold'>
              {userData?.name || 'Semicolon ;'}{' '}
              {/* Display user name or default */}
            </h2>
            <span className='text-sm dark:text-gray-600'>
              {userData?.role || 'Regular User'}{' '}
              {/* Display user role or default */}
            </span>
          </div>

          {/* Contact information */}
          <div>
            {/* Phone number */}
            <span className='flex items-center space-x-2'>
              <AiOutlinePhone />
              <span className='dark:text-gray-600'>
                {userData?.phone || '+880 123XXXXXX'}{' '}
                {/* Display phone or default */}
              </span>
            </span>

            {/* Email address */}
            <span className='flex items-center space-x-2'>
              <TfiEmail />

              <span className='dark:text-gray-600'>
                {userData?.email || 'example@gmail.com'}{' '}
                {/* Display email or default */}
              </span>
            </span>

            {/* User ID */}
            <span className='flex items-center space-x-2'>
              <span>UID:</span>
              <span className='dark:text-gray-600'>
                {userData?._id || '123xxxxx'} {/* Display user ID or default */}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
