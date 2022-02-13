import {
  LOGIN_MODAL_ACTIVE,
  LOGIN_MODAL_DISABLED,
} from 'store/actions/modalType';
import {
  LoginModalActiveAction,
  LoginModalDisabledAction,
} from './../../types/store/modalTypes';

type ModalActionTypes = LoginModalActiveAction | LoginModalDisabledAction;

export default function loginModal(
  state = { active: true },
  action: ModalActionTypes
) {
  switch (action.type) {
    case LOGIN_MODAL_ACTIVE:
      return action.payload;
    case LOGIN_MODAL_DISABLED:
      return action.payload;
    default:
      return state;
  }
}
