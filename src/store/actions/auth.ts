import { SIGNUP_USER, AUTH_USER, UNAUTH_USER } from './actionType';

export interface LoginParams {
  userName: string;
  profileImage: string;
}

const signup = ({ userName, profileImage }: LoginParams) => {
  return {
    type: SIGNUP_USER,
    payload: { userName, profileImage },
  };
};

const login = ({ userName, profileImage }: LoginParams) => {
  return {
    type: AUTH_USER,
    payload: { userName, profileImage },
  };
};

const logout = () => {
  return {
    type: UNAUTH_USER,
  };
};

export { signup, login, logout };
