import { MeData, MessageData } from 'types/store/dataTypes';

export const ME: MeData = {
  userId: 1,
  userName: null,
  profileImage: null,
};

export const MESSAGE_DATA: MessageData[] = [
  {
    ...ME,
    content: '',
    date: '',
  },
  {
    userId: 2,
    userName: '스윗',
    profileImage: 'https://i.esdrop.com/d/f/KwrGH1p1Zl/TPlfZAwECA.png',
    content: '',
    date: '',
  },
  {
    userId: 3,
    userName: '럭키짱',
    profileImage: 'https://i.esdrop.com/d/f/KwrGH1p1Zl/m9s21g7ugw.png',
    content: '',
    date: '',
  },
];
