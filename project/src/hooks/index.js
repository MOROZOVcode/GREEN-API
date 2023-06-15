import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function func() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(func, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
