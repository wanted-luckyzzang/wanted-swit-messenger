import { MeData, MessageData } from './dataTypes';

export interface StoreState {
  message: MessageData[];
  auth: MeData;
}
