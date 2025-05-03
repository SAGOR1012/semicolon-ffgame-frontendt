import axios from 'axios';

const UseAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_API,
  });
  return axiosPublic;
};

export default UseAxiosPublic;
