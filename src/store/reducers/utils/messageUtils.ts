import { SendParams } from 'store/actions/message';
import { MessageData } from 'types/store';
import { ME } from 'store/data';

export const sendMessage = (
  messageState: MessageData[],
  { content, date }: SendParams
) => {
  return [
    ...messageState,
    {
      ...ME,
      content,
      date,
    },
  ];
};
export const deleteMessage = (messageState: MessageData[], date: string) => {
  return messageState.filter((message: MessageData) => message.date !== date);
};
