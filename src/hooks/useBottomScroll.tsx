import { MutableRefObject, useEffect } from 'react';
import { MessageData } from 'types/store';

export const useBottomScroll = (
  messageState: MessageData[],
  scrollRef: MutableRefObject<HTMLDivElement | null>
) => {
  const scrollBottom = () => {
    if (messageState && scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'end',
        inline: 'nearest',
      });
    }
  };
  useEffect(() => {
    scrollBottom();
  }, [messageState]);
};
