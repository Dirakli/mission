import { initial } from 'lodash';
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }


  });
  const setValue = (newValue) => {
    try {
        const valueToStore = newValue instanceof Function ? newValue(storedValue) : newValue;
        setStoredValue(valueToStore);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          }
    }
    catch(error){
        console.log("_____useLocalStorage__setValue___", error);
    }
}
    return [storedValue, setValue];
};
