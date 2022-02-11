import { DELETE_MESSAGE, SEND_MESSAGE } from 'store/actions/actionType';
import { DeleteParams, SendParams } from 'store/actions/message';

export interface SendAction {
  type: typeof SEND_MESSAGE;
  payload: SendParams;
}

export interface DeleteAction {
  type: typeof DELETE_MESSAGE;
  payload: DeleteParams;
}
