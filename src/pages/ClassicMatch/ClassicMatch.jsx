import { IoMdKey } from 'react-icons/io';
import { AiFillCaretDown } from 'react-icons/ai';
import { LiaTrophySolid } from 'react-icons/lia';
import UseAllClassicMatchFF from '../../Hooks/UseAllClassicMatchFF';
import PricePoolCard from '../../Components/PricePoolCard/PricePoolCard';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const ClassicMatch = () => {
  const [allFF_ClassicMatch, isLoading, refetch] = UseAllClassicMatchFF();

  // Show loading spinner or message while loading
  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-[50vh]'>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return (
    <div className=''>
      <div className='pt-28  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-blue-950 '>
        {/* All FF Classic match card */}
        {allFF_ClassicMatch.map((match) => (
          <div
            key={match._id}
            className='rounded-lg bg-zinc-50 w-full my-2 shadow-lg flex flex-col '>
            {/* card body */}
            <div className='p-2'>
              {/* Title */}
              <div className='flex justify-start gap-5'>
                {/* img */}
                <img
                  className='w-12 h-12 md:w-16 md:h-16 rounded-md'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqEFgxyWL-thi2FRNvLxIYuoGVQfJ0rsmog&s'
                  alt=''
                />
                {/* game type | time | date| id */}
                <div>
                  <h3 className='font-bold'>
                    {match.gametype} | {match.version} | #{match._id}
                  </h3>
                  {/* time * date */}
                  <h4 className='text-red-500'>
                    Time: {match.date} at {match.time}
                  </h4>
                  {/* Dynamic date & time */}
                </div>
              </div>
              {/* Body */}
              <div className='uppercase text-pragraph mt-2 font-bold grid grid-cols-3 items-center gap-3'>
                <div>
                  <h3>Total Price</h3>
                  <p className='text-blue-950'>
                    <span className='font-extrabold'>৳</span> {match.totalPrice}
                  </p>
                </div>
                <div>
                  <h3>per kill</h3>
                  <p className='text-blue-950'>
                    <span className='font-extrabold'>৳</span> {match.perkill}
                  </p>
                </div>
                <div>
                  <h3>entry fee</h3>
                  <p className='text-blue-950'>
                    <span className='font-extrabold'>৳</span> {match.entryfee}
                  </p>
                </div>
                <div>
                  <h3>type</h3>
                  <p className='text-blue-950'>{match.gametype}</p>
                </div>
                <div>
                  <h3>version</h3>
                  <p className='text-blue-950'>{match.version}</p>
                </div>
                <div>
                  <h3>Map</h3>
                  <p className='text-blue-950'>{match.map}</p>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className='p-2'>
              {/* progress bar */}
              <div className='flex justify-between gap-2'>
                <div className='flex flex-col gap-3 w-full'>
                  <progress
                    className='progress h-1 progress-warning rounded-none'
                    value={match.totalslot}
                    max='100'></progress>
                  <div className='text-pragraph flex justify-between'>
                    <p className='text-xs md:text-sm font-semibold'>
                      Only 16 spots left
                    </p>
                    <p className='font-semibold'>32/{match.totalslot}</p>
                  </div>
                </div>
                <button className='p-2 border-2 w-10/12 rounded-md border-secondary text-secondary font-bold md:text-sm'>
                  Join
                </button>
                {/* If full, show registration closed button instead */}
                {/* <button className="p-2 border-2 w-10/12 rounded-md border-red-500 text-red-500 font-bold md:text-sm">Registration Closed</button> */}
              </div>
            </div>
            <div className='flex p-2'>
              {/* room details */}
              <div className='dropdown dropdown-bottom border w-full'>
                <div
                  tabIndex={0}
                  role='button'
                  className='w-full p-1 flex gap-2 items-center justify-between font-bold text-sm text-secondary border-2 border-secondary rounded-sm'>
                  <IoMdKey />
                  Room Details <AiFillCaretDown />
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow'>
                  <p>room id : {match.roomid}</p>
                  <p>password : {match.roompass}</p>
                </ul>
              </div>
              {/* Price details */}
              <div className='dropdown dropdown-bottom w-full'>
                <div
                  tabIndex={0}
                  role='button'
                  className='w-full p-1 flex gap-1 items-center justify-between font-bold text-sm text-secondary border-2 border-secondary rounded-sm'>
                  <LiaTrophySolid />
                  <span className=''> Total Price Details</span>
                  <AiFillCaretDown />
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu bg-base-100 rounded-sm z-[1] p-1 md:w-52 md:p-2 shadow'>
                  <PricePoolCard match={match} />
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicMatch;
