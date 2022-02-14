import { useCallback } from 'react';

export const useControlModal = (
  setFunc: (set: boolean) => void,
  active: boolean,
  ...restprops: any
) => {
  return useCallback(() => {
    if (restprops && restprops[0] === restprops[1]) setFunc(active);
    else alert('자신의 메세지만 삭제할 수 있습니다.');
  }, [setFunc]);
};
