import { DELETE_MESSAGE, SEND_MESSAGE } from 'store/actions/actionType';
import { DeleteAction, SendAction } from 'types/store/messageTypes';
import { MESSAGE_DATA } from '../data';

type MessageActionTypes = SendAction | DeleteAction;

export default function message(state = MESSAGE_DATA, action: MessageActionTypes) {
  switch (action.type) {
    case SEND_MESSAGE:
    case DELETE_MESSAGE:
    default:
      return state;
  }
}
