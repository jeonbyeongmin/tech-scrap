import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {RecoilState, useRecoilState} from 'recoil';

export const useAsyncStorageQuery = <T,>(
  key: string,
  initialState: RecoilState<T[]>,
) => {
  const [data, setData] = useRecoilState<T[]>(initialState);
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
  }, [key, setData]);

  return {isLoading, setData, error, isError, data};
};
