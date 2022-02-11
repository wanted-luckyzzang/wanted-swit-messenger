import { MeData, MessageData } from 'types/store';

export const DEFAULT_PROFILE =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

export const ME: MeData = {
  userId: 0,
  userName: undefined,
  profileImage: DEFAULT_PROFILE,
};

export const MESSAGE_DATA: MessageData[] = [
  {
    userId: 0,
    userName: '고양이',
    profileImage: 'https://i.esdrop.com/d/f/vm5UxhGOK0/DnrULlNaPn.jpg',
    content: '냐냐냐냐냐냐냐냐냥냐냥',
    date: '2022-02-11 11:39:29',
  },
  {
    userId: 1,
    userName: '럭키짱',
    profileImage: 'https://i.esdrop.com/d/f/KwrGH1p1Zl/m9s21g7ugw.png',
    content:
      '인생은 한 방! 밀리면 밀릴수록, 처참하면 처참할수록, 그야말로 비참한 상황에서 피와 한을 한껏 온 몸으로 받아들인 후, 어둠 속에서 솟구치는 한 줄기 빛처럼 가슴 속에서 튀어나오는 뭉클한 그것! 난 그 한 방을 믿어!',
    date: '2022-02-11 13:26:29',
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
    userId: 1,
    userName: '럭키짱',
    profileImage: 'https://i.esdrop.com/d/f/KwrGH1p1Zl/m9s21g7ugw.png',
    content: '777777 lucky zzang',
    date: '2022-02-11 17:43:29',
  },
  {
    userId: 2,
    userName: '스윗',
    profileImage: 'https://i.esdrop.com/d/f/KwrGH1p1Zl/TPlfZAwECA.png',
    content: 'so sweet!',
    date: '2022-02-11 22:40:31',
  },
];
