import { AUTH_USER, UNAUTH_USER } from './actionType';

export interface LoginParams {
  userName: string | undefined;
}

const login = ({ userName }: LoginParams) => {
  return {
    type: AUTH_USER,
    payload: { userName },
  };
};

const logout = () => {
  return {
    type: UNAUTH_USER,
  };
};

export {login, logout };
