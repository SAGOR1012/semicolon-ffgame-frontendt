// 🪝 useUser.js (Custom Hook to get a specific user)
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';
import UseAuth from './UseAuth';

const UseUser = () => {
  const { user } = UseAuth();
  // const axiosPublic = UseAxiosPublic();
  const axiosPublic = UseAxiosPublic(); // Create an instance of axios for public API requests

  const {
    data: userData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Only run if user email is available
  });

  return { userData, isLoading, refetch };
};

export default UseUser;
