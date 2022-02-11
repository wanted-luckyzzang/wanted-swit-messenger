import { DELETE_MESSAGE, SEND_MESSAGE } from './actionType';

export interface SendParams {
  content: string;
  date: string;
}

export interface DeleteParams {
  date: string;
}

const sendMessage = ({ content, date }: SendParams) => {
  return {
    type: SEND_MESSAGE,
    payload: { content, date },
  };
};

const deleteMessage = ({ date }: DeleteParams) => {
  return {
    type: DELETE_MESSAGE,
    payload: { date },
  };
};

export { sendMessage, deleteMessage };
