import { AUTH_USER, UNAUTH_USER } from './actionType';

export interface LoginParams {
  userId: number;
  userName: string | undefined;
  profileImage: string;
}
export interface LogoutParams {
  userName: string | undefined;
}

const login = ({ userId, userName, profileImage }: LoginParams) => {
  return {
    type: AUTH_USER,
    payload: { userId, userName, profileImage },
  };
};

const logout = ({userName}: LogoutParams) => {
  return {
    type: UNAUTH_USER,
    payload: {userName}
  };
};

export { login, logout };
