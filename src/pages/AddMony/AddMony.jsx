import { useForm } from 'react-hook-form';
import bkash from '../../assets/bkash.webp';
import nogod from '../../assets/nogot.png';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const AddMony = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("Form Data:", data);

    toast.success('অ্যাড মানি রিকোয়েস্ট সফল হয়েছে');

    reset();
  };

  return (
    <div className='pt-28 bg-primary-bg-image flex justify-center'>
      <Helmet>
        <title>semicolonff | Add Money</title>
      </Helmet>
      <div className='flex flex-col max-w-md p-2 sm:p-10 bg-white'>
        {/* Bkash and Nogod Section */}
        <div className='mb-2 text-center flex flex-col gap-2'>
          <div className='flex gap-2 items-center'>
            <img
              className='h-10 w-10'
              src={bkash}
              alt='Bkash'
            />
            <p>
              <span className='text-xl text-pink-600'>01639136200</span> - সেন্ড
              মানি Minimum 10 TK
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
              সেন্ড মানি Minimum 10 TK
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-12'>
          <div className='space-y-4 font-semibold mt-5'>
            {/* Amount */}
            <div>
              <label
                htmlFor='amount'
                className='block mb-2 text-sm'>
                আপনি কত টাকা পাঠিয়েছেন নিচে সেটি লিখুন
              </label>
              <input
                type='number'
                id='amount'
                {...register('amount', {
                  required: 'টাকার পরিমাণ আবশ্যক',
                  min: { value: 10, message: 'মিনিমাম 10 TK লাগবে' },
                })}
                placeholder='টাকার পরিমাণ লিখুন'
                className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
              />
              {errors.amount && (
                <p className='text-red-500 text-sm'>{errors.amount.message}</p>
              )}
            </div>

            {/* Sender Number */}
            <div>
              <label
                htmlFor='number'
                className='block mb-2 text-sm'>
                যে নাম্বার থেকে টাকা পাঠিয়েছেন সেই পুরো নাম্বারটি লিখুন
              </label>
              <input
                type='number'
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
                <p className='text-red-500 text-sm'>{errors.number.message}</p>
              )}
            </div>
            {/* ✅ Trx ID (Optional) */}
            <div>
              <label
                htmlFor='trxId'
                className='block mb-2 text-sm'>
                ট্রানজেকশন আইডি (যদি থাকে)
              </label>
              <input
                type='text'
                id='trxId'
                {...register('trxId')}
                placeholder='Trx ID (অপশনাল)'
                className='w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800'
              />
            </div>
            {/* Payment Method */}
            <div className='flex gap-4 items-center'>
              <div className='flex items-center'>
                <input
                  type='radio'
                  value='Bkash'
                  {...register('method', {
                    required: 'পেমেন্ট মেথড সিলেক্ট করুন',
                  })}
                  id='bkash_radio'
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
              <div className='flex items-center'>
                <input
                  type='radio'
                  value='Nogod'
                  {...register('method', {
                    required: 'পেমেন্ট মেথড সিলেক্ট করুন',
                  })}
                  id='nogod_radio'
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

          {/* Submit Button */}
          <div className='space-y-2'>
            <button
              type='submit'
              className='w-full px-8 py-3 font-semibold rounded-md bg-green-500 text-white'>
              Add Mony
            </button>
          </div>
        </form>

        <div className='mt-5'>
          <p className='px-6 text-sm text-center text-error font-semibold'>
            Add Mony তে ক্লিক করার পূর্বে টাকা সেন্ড করতে হবে |
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddMony;
