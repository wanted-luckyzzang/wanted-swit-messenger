import { ME } from 'store/data';
import { LoginAction, LogoutAction } from 'types/store/authTypes';
import { AUTH_USER, UNAUTH_USER } from '../actions/actionType';

type AuthActionTypes = LoginAction | LogoutAction;

export default function auth(state = ME, action: AuthActionTypes) {
  switch (action.type) {
    case AUTH_USER:
      return state;
    case UNAUTH_USER:
      return state;
    default:
      return state;
  }
}
