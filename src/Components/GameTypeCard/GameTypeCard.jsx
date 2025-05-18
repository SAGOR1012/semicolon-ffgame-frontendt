import { Link } from 'react-router-dom';
import SpecialCard from './SpecialCard/SpecialCard';
import UseAllClassicMatchFF from '../../Hooks/UseAllClassicMatchFF';

const GameTypeCard = () => {
  const [classicMatchFF] = UseAllClassicMatchFF();
  return (
    <div className=' grid grid-cols-2 md:grid-cols-3 mx-4 items-center justify-center gap-5 mt-10 pb-10 md:mt-20'>
      {/* 1st card Classic Match */}
      <Link to='/classicmatch'>
        <div className='relative flex flex-col bg-red-500 rounded-lg py-1 px-3 md:p-6  text-white'>
          <figcaption className='flex flex-col gap-2 md:gap-4 md:flex-row justify-start '>
            <img
              className='flex-none w-8 h-8 md:w-14 md:h-14 rounded-full object-cover'
              src='https://i.ibb.co.com/ds4mC0CW/66d7d9f2ca803-com-dts-freefireth.png'
              alt=''
            />
            <div className=' '>
              <div className=' font-semibold text-xl md:text-2xl text-white'>
                Classic Match
              </div>
              <div className='mt-0.5 '>
                <span className='text-xl font-bold '>
                  {classicMatchFF ? classicMatchFF.length : '0'}
                </span>{' '}
                Matches Available
              </div>
            </div>
          </figcaption>
        </div>
      </Link>

      {/*2ns card clash squad */}

      {/* <div className='relative flex flex-col bg-blue-600 rounded-lg py-1 px-3 md:p-6  text-white'>
        <figcaption className='flex flex-col gap-2 md:gap-4 md:flex-row justify-start '>
          <img
            className='flex-none w-8 h-8 md:w-14 md:h-14 rounded-full object-cover'
            src='https://i.ibb.co.com/ds4mC0CW/66d7d9f2ca803-com-dts-freefireth.png'
            alt=''
          />
          <div className=' '>
            <div className=' font-semibold text-xl md:text-2xl text-white'>
              Clash Squad
            </div>
            <div className='mt-0.5 '>
              <span className='text-xl font-bold '>3</span> Matches Available
            </div>
          </div>
        </figcaption>
      </div> */}

      {/* <SpecialCard></SpecialCard> */}
    </div>
  );
};

export default GameTypeCard;
