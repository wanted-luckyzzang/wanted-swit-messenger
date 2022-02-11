import { SendParams } from 'store/actions/message';
import { MessageData } from 'types/store';

export const sendData = (
  messageState: MessageData[],
  { userId, userName, profileImage, content, date }: SendParams
) => {
  return [
    ...messageState,
    {
      userId,
      userName,
      profileImage,
      content,
      date,
    },
  ];
};
export const deleteData = (messageState: MessageData[], date: string) => {
  return messageState.filter((message: MessageData) => message.date !== date);
};
