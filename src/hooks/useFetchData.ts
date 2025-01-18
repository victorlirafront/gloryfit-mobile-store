import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { SWAPI } from '../constants/endpoints';

interface UseFetchDataReturn<T> {
  data: T | null;
  error: AxiosError | null;
  loading: boolean;
}

const useFetchData = <T>(endpoint: string): UseFetchDataReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<T>(`${SWAPI}/${endpoint}`);
        setData(response.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};

export default useFetchData;
