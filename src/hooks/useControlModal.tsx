import { useCallback } from 'react';

export const useControlModal = (
  setFunc: (set: boolean) => void,
  active: boolean
) => {
  return useCallback(() => {
    setFunc(active);
  }, [setFunc]);
};
