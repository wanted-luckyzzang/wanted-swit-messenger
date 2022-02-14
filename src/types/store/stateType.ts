import { ModalParams } from './modalTypes';
import { AnswerData, MeData, MessageData } from './dataTypes';

export interface StoreState {
  message: MessageData[];
  auth: MeData;
  answer: AnswerData;
  loginModal: ModalParams;
}
