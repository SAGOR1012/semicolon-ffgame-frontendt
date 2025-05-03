import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';

const SignUp = () => {
  const { createUser } = UseAuth(); // Custom hook to handle user authentication
  const axiosPublic = UseAxiosPublic(); // Axios instance for public API requests
  const navigate = useNavigate(); // React Router hook for navigation

  const {
    register, // Register input fields for validation
    handleSubmit, // Handle form submission
    formState: { errors }, // Form validation errors
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    // Create a new user with email and password
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user; // Newly created user
        console.log('Newly created user:', user);

        // Prepare user data to save in the database
        const userData = {
          name: data.name,
          phone: data.phone,
          email: data.email,
          password: data.password,
          role: 'user', // Set default role as "user"
        };

        // Save user data to the database
        axiosPublic.post('/users', userData).then((response) => {
          if (response.data.insertedId) {
            console.log('User data saved successfully:', response.data);
            // Show success message
            Swal.fire({
              icon: 'success',
              title: 'সাইন আপ সফল হয়েছে',
              text: 'হোম পেইজে নিয়ে যাওয়া হচ্ছে...',
              timer: 1500,
              showConfirmButton: false,
            });
          } else {
            console.error('Failed to save user data:', response.data);
          }
        });

        // Redirect to the home page after a delay
        setTimeout(() => {
          navigate('/');
        }, 1600);
      })
      .catch((error) => {
        // Handle errors during signup
        if (error.code === 'auth/email-already-in-use') {
          Swal.fire({
            title: 'এই ইমেইলটি পূর্বে ব্যবহৃত হয়েছে',
            text: 'দয়া করে অন্য একটি ইমেইল ব্যবহার করুন',
            icon: 'error',
          });
        } else {
          console.error('Signup error:', error.code, error.message);
        }
      });
  };

  return (
    <div className='flex justify-center bg-primary'>
      {/* Page Title */}
      <Helmet>
        <title>semicolonff | signUp</title>
      </Helmet>

      <div className='w-full max-w-sm p-8 space-y-3 rounded-xl bg-primary-bg-image mt-28'>
        {/* Page Heading */}
        <h1 className='text-2xl font-bold text-center text-white mb-10'>
          Sign Up
        </h1>

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto max-w-xs'>
          {/* Name input */}
          <label
            htmlFor='name'
            className='block text-white mb-1'>
            Name
          </label>
          <input
            name='name'
            className='w-full px-8 py-2 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green focus:bg-white'
            {...register('name', {
              required: 'নাম আবশ্যক',
              minLength: {
                value: 3,
                message: 'নাম কমপক্ষে ৩ অক্ষরের হতে হবে',
              },
            })}
            type='text'
            placeholder='Your Name'
          />
          {errors.name && (
            <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>
          )}

          {/* Phone number input */}
          <label
            htmlFor='phone'
            className='block text-white mb-1'>
            Phone Number
          </label>
          <input
            name='phone'
            className='w-full px-8 py-2 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green focus:bg-white'
            {...register('phone', {
              required: 'ফোন নম্বর আবশ্যক',
              pattern: {
                value: /^\d{11}$/,
                message: 'ফোন নম্বর অবশ্যই ১১ সংখ্যার হতে হবে',
              },
            })}
            type='text'
            placeholder='01xxxxxxxxx'
          />
          {errors.phone && (
            <p className='text-red-500 text-xs mt-1'>{errors.phone.message}</p>
          )}

          {/* Email input */}
          <label
            htmlFor='email'
            className='block text-white mb-1'>
            Email
          </label>
          <input
            name='email'
            className='w-full px-8 py-2 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green focus:bg-white'
            {...register('email', { required: 'ই-মেইল আবশ্যক' })}
            type='email'
            placeholder='Email'
          />
          {errors.email && (
            <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
          )}

          {/* Password input */}
          <label
            htmlFor='password'
            className='block text-white mb-1'>
            Password
          </label>
          <input
            name='password'
            className='w-full px-8 py-2 rounded-md font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green focus:bg-white'
            {...register('password', {
              required: 'পাসওয়ার্ড আবশ্যক',
              minLength: {
                value: 5,
                message: 'পাসওয়ার্ড কমপক্ষে ৫ অক্ষরের হতে হবে',
              },
              maxLength: {
                value: 11,
                message: 'পাসওয়ার্ড ১১ অক্ষরের বেশি হওয়া যাবে না',
              },
            })}
            type='text'
            placeholder='Password'
          />
          {errors.password && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.password.message}
            </p>
          )}

          {/* Submit button */}
          <button className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
            <svg
              className='w-6 h-6 -ml-2'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
              <circle
                cx='8.5'
                cy='7'
                r='4'
              />
              <path d='M20 8v6M23 11h-6' />
            </svg>
            <span className='ml-3'>Sign Up</span>
          </button>
        </form>

        {/* Link to login page */}
        <p className='text-xs text-center sm:px-6 text-white'>
          আগে থেকেই একাউন্ট আছে ?
          <Link
            to='/login'
            className='text-orange-600'>
            লগইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
