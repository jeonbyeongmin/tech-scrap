import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useAsyncStorageQuery = <T,>(key: string) => {
  const [data, setData] = useState<Array<T>>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const jsonValue = await AsyncStorage.getItem(key);

        if (jsonValue) {
          const value: T[] = jsonValue != null ? JSON.parse(jsonValue) : null;
          setData(value);
        }

        setIsLoading(false);
      } catch (e) {
        setIsError(true);
        setError(e);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [key]);

  return {isLoading, setData, error, isError, data};
};
