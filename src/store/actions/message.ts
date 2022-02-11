import { DELETE_MESSAGE, SEND_MESSAGE } from './actionType';

export interface SendParams {
  userId: number;
  userName: string | undefined;
  profileImage: string;
  content: string;
  date: string;
}
export interface DeleteParams {
  date: string;
}
const sendMessage = ({ userId, userName, profileImage, content, date }: SendParams) => {
  return {
    type: SEND_MESSAGE,
    payload: { userId, userName, profileImage, content, date },
  };
};
const deleteMessage = ({ date }: DeleteParams) => {
  return {
    type: DELETE_MESSAGE,
    payload: { date },
  };
};
export { sendMessage, deleteMessage };
