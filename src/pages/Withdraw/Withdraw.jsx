import { useForm } from 'react-hook-form';
import bkash from '../../assets/bkash.webp';
import nogod from '../../assets/nogot.png';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // make sure this line is in a top-level file once

const Withdraw = () => {
  /* ────────────────────────────────────────────────
     React-Hook-Form setup
  ──────────────────────────────────────────────────*/
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* ────────────────────────────────────────────────
     Submit handler
  ──────────────────────────────────────────────────*/
  const onSubmit = () => {
    toast.success('উত্তোলন অনুরোধ সফল হয়েছে'); // ✅ toast alert
    reset(); // clear the form
  };

  /* ────────────────────────────────────────────────
     JSX
  ──────────────────────────────────────────────────*/
  return (
    <div>
      <Helmet>
        <title>semicolonff | Withdraw Money</title>
      </Helmet>

      <div className='pt-28 bg-primary-bg-image flex justify-center'>
        <div className='flex flex-col max-w-md p-2 sm:p-10 bg-white'>
          {/* Bkash / Nogod info */}
          <div className='mb-2 text-center flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
              <img
                className='h-10 w-10'
                src={bkash}
                alt='Bkash'
              />
              <p>
                <span className='text-xl text-pink-600'>01639136200</span> -
                উত্তোলন ন্যূনতম 50 TK
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <img
                className='h-10 w-10'
                src={nogod}
                alt='Nogod'
              />
              <p>
                <span className='text-xl text-orange-500'>01639136200</span> -
                উত্তোলন ন্যূনতম 50 TK
              </p>
            </div>
          </div>

          {/* ──────── Form ──────── */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-12'>
            <div className='space-y-4 font-semibold mt-5'>
              {/* Amount */}
              <div>
                <label
                  htmlFor='amount'
                  className='block mb-2 text-sm'>
                  আপনি কত টাকা উত্তোলন করতে চান তা লিখুন
                </label>
                <input
                  type='number'
                  id='amount'
                  {...register('amount', {
                    required: 'টাকার পরিমাণ আবশ্যক',
                    min: { value: 50, message: 'ন্যূনতম 50 TK লাগবে' },
                  })}
                  placeholder='টাকার পরিমাণ লিখুন'
                  className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
                />
                {errors.amount && (
                  <p className='text-red-500 text-sm'>
                    {errors.amount.message}
                  </p>
                )}
              </div>

              {/* Receiver number */}
              <div>
                <label
                  htmlFor='number'
                  className='block mb-2 text-sm'>
                  যে নাম্বারে টাকা পাঠাতে চান সেটি লিখুন
                </label>
                <input
                  type='text'
                  id='number'
                  {...register('number', {
                    required: 'নাম্বার আবশ্যক',
                    pattern: {
                      value: /^\d{11}$/,
                      message: '১১ ডিজিটের সঠিক ফোন নাম্বার দিন',
                    },
                  })}
                  placeholder='আপনার বিকাশ অথবা নগদের নাম্বার'
                  className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
                />
                {errors.number && (
                  <p className='text-red-500 text-sm'>
                    {errors.number.message}
                  </p>
                )}
              </div>

              {/* Method */}
              <div className='flex gap-4 items-center'>
                {/* Bkash radio */}
                <div className='flex items-center'>
                  <input
                    type='radio'
                    value='Bkash'
                    id='bkash_radio'
                    {...register('method', {
                      required: 'উত্তোলন মেথড সিলেক্ট করুন',
                    })}
                    className='mr-2'
                  />
                  <label
                    htmlFor='bkash_radio'
                    className='flex items-center gap-2'>
                    <img
                      className='w-10 h-10'
                      src={bkash}
                      alt='Bkash'
                    />
                    Bkash
                  </label>
                </div>

                {/* Nogod radio */}
                <div className='flex items-center'>
                  <input
                    type='radio'
                    value='Nogod'
                    id='nogod_radio'
                    {...register('method', {
                      required: 'উত্তোলন মেথড সিলেক্ট করুন',
                    })}
                    className='mr-2'
                  />
                  <label
                    htmlFor='nogod_radio'
                    className='flex items-center gap-2'>
                    <img
                      className='w-10 h-10'
                      src={nogod}
                      alt='Nogod'
                    />
                    Nogod
                  </label>
                </div>
              </div>
              {errors.method && (
                <p className='text-red-500 text-sm'>{errors.method.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className='space-y-2'>
              <button
                type='submit'
                className='w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white'>
                Withdraw Money
              </button>
            </div>
          </form>

          <div className='mt-5'>
            <p className='px-6 text-sm text-center text-error font-semibold'>
              উত্তোলনের অনুরোধ পাঠানোর পূর্বে ব্যালেন্স চেক করুন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
