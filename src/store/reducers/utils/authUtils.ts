import { MessageData } from 'types/store';

const getNewId = (state: MessageData[]): number => {
  let newId = 0;
  const idList = state.map(({ userId }) => userId);
  while (true) {
    if (idList.includes(newId)) {
      newId++;
    } else {
      return newId;
    }
  }
};

export default getNewId;
