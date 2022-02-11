import { AUTH_USER, UNAUTH_USER } from './actionType';

export interface LoginParams {
  userName: string | undefined;
  profileImage : string;
}

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

export {login, logout };
