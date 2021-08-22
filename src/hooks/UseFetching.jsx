import { useState } from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsloading(true);
      await callback();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsloading(false);
    }
  };
  return [fetching, isLoading, error];
};

export default useFetching;
