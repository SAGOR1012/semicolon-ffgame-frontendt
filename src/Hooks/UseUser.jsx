import UseAxiosPublic from './UseAxiosPublic';
import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UseUser = () => {
  const axiosPublic = UseAxiosPublic();
  const { user, loading: authLoading } = UseAuth();

  /* main code without comment 
const { data: userData } = useQuery({
  queryKey: ['user', user?.email],
  enabled: !!user?.email,
  queryFn: async () => {
    const res = await axiosPublic.get(`/users?email=${user.email}`);
    return res.data;
  },
});

*/

  // React Query ব্যবহার করে ব্যবহারকারীর ডেটা ফেচ করা হচ্ছে
  const {
    data: userData = null, // ডিফল্ট মান null
    isPending: isLoading, // লোডিং স্টেট চেক করার জন্য
    refetch, // ডেটা পুনরায় ফেচ করার জন্য
  } = useQuery({
    queryKey: ['user', user?.email], // ব্যবহারকারীর ইমেইল ভিত্তিক কুইরি
    enabled: !!user?.email && !authLoading, // কুইরি চালানোর শর্ত (ইমেইল থাকতে হবে এবং লোডিং শেষ হতে হবে)
    queryFn: async () => {
      const res = await axiosPublic.get(`/users?email=${user.email}`); // API থেকে ডেটা ফেচ করা হচ্ছে
      return res.data; // ফেচ করা ডেটা রিটার্ন করা হচ্ছে
    },
  });

  // লোডিং স্পিনার দেখানোর জন্য
  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div
          className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500'
          role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }

  // ব্যবহারকারীর ডেটা, লোডিং স্টেট এবং রিফেচ ফাংশন রিটার্ন করা হচ্ছে
  return { userData, isLoading, refetch };
};

export default UseUser;
