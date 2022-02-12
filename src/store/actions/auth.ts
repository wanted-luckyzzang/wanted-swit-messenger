import { AUTH_USER, UNAUTH_USER } from './actionType';

export interface LoginParams {
  userId: number;
  userName: string | undefined;
  profileImage: string;
}

const login = ({ userId, userName, profileImage }: LoginParams) => {
  return {
    type: AUTH_USER,
    payload: { userId, userName, profileImage },
  };
};

const logout = () => {
  return {
    type: UNAUTH_USER,
  };
};

export { login, logout };
