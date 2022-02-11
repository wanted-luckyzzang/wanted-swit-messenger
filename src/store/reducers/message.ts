import { DELETE_MESSAGE, SEND_MESSAGE } from 'store/actions/actionType';
import { DeleteAction, SendAction } from 'types/store/messageTypes';
import { MESSAGE_DATA } from '../data';
import { deleteData, sendData } from './utils/';

type MessageActionTypes = SendAction | DeleteAction;

export default function message(
  state = MESSAGE_DATA,
  action: MessageActionTypes
) {
  switch (action.type) {
    case SEND_MESSAGE:
      return sendData(state, action.payload);
    case DELETE_MESSAGE:
      return deleteData(state, action.payload.date);
    default:
      return state;
  }
}
