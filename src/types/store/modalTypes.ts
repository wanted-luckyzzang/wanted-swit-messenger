import {
  LOGIN_MODAL_ACTIVE,
  LOGIN_MODAL_DISABLED,
} from 'store/actions/modalType';

export interface ModalParams {
  active: boolean;
}

export interface LoginModalActiveAction {
  type: typeof LOGIN_MODAL_ACTIVE;
  payload: ModalParams;
}

export interface LoginModalDisabledAction {
  type: typeof LOGIN_MODAL_DISABLED;
  payload: ModalParams;
}
