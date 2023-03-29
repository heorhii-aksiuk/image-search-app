import { useEffect, useState } from 'react';
import { LS_ERROR_MESSAGE } from '../constants';

function useLocalStorage(key: string, defaultValue: string) {
  const rawStorageData = window.localStorage.getItem(key);

  const getParsedStorageData = () => {
    if (rawStorageData) {
      try {
        return JSON.parse(rawStorageData);
      } catch (error) {
        console.error(LS_ERROR_MESSAGE(key));
        window.localStorage.setItem(key, JSON.stringify(null));
        return defaultValue;
      }
    }
    return defaultValue;
  };

  const [state, setState] = useState(getParsedStorageData);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
