import { MeData, MessageData } from 'types/store';

export const ME: MeData = {
  userId: 1,
  userName: undefined,
  profileImage: undefined,
};

export const MESSAGE_DATA: MessageData[] = [
  {
    ...ME,
    content: '',
    date: '2022-02-11 11:07:01',
  },
  {
    userId: 2,
    userName: '스윗',
    profileImage: 'https://i.esdrop.com/d/f/KwrGH1p1Zl/TPlfZAwECA.png',
    content:
      'This is where the marketing event is held. Come and play! Swit Restaurant at 000 ABC St,  San Francisco, CA 00000This is where the marketing event is held. Come and play! Swit Restaurant at 000 ABC St,  San Francisco, CA 00000This is where the marketing event is held. Come and play! Swit Restaurant at 000 ABC St,  San Francisco, CA 00000This is where the marketing event is held. Come and play! Swit Restaurant at 000 ABC St,  San Francisco, CA 00000This is where the marketing event is held. Come and play! Swit Restaurant at 000 ABC St,  San Francisco, CA 00000',
    date: '2022-02-11 15:40:31',
  },
  {
    userId: 3,
    userName: '럭키짱',
    profileImage: 'https://i.esdrop.com/d/f/KwrGH1p1Zl/m9s21g7ugw.png',
    content: '',
    date: '2022-02-11 15:43:29',
  },
];
