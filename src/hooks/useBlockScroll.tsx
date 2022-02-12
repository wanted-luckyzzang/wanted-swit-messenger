import { useEffect } from 'react';

export const useBlockScroll = (state: boolean) => {
  console.log(state);
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [state])
}