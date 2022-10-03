import { useState, useEffect } from 'react';

function useLocalStorage(initialValue, key = 'react-app') {
  const [state, setState] = useState(() => {
    //lazy initializer
    const store = localStorage.getItem(key);
    switch (store) {
      case 'undefined':
        return undefined;
      case null:
        return initialValue;
      default:
        try {
          return JSON.parse(store);
        } catch (e) {
          return store;
        }
    }
  });

  useEffect(() => {
    localStorage.setItem(key, typeof state === 'string' ? state : JSON.stringify(state));
    //localStorage.setItem(key, state);
  }, [state, key]);

  const remove = () => localStorage.removeItem(key);

  return [state, setState, remove];
}

export { useLocalStorage };
