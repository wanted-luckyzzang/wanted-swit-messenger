import { useEffect } from 'react';

export const useBlockScroll = (state: boolean) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state])
}