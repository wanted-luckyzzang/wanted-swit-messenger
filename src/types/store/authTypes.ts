import { AUTH_USER, UNAUTH_USER } from 'store/actions/actionType';
import { LoginParams } from 'store/actions/auth';

export interface LoginAction {
  type: typeof AUTH_USER;
  payload: LoginParams;
}
export interface LogoutAction {
  type: typeof UNAUTH_USER;
}
