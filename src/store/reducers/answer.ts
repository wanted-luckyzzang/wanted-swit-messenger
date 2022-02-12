import { ANSWER, ANSWER_CLEAN } from 'store/actions/actionType';
import { ANSWER_DATA } from 'store/data';
import { AnswerAction, CleanAction } from 'types/store';

type ANSWERActions = AnswerAction | CleanAction;
export default function answer(state = ANSWER_DATA, action: ANSWERActions) {
  switch (action.type) {
    case ANSWER:
      return {
        content: action.payload.content,
      };
    case ANSWER_CLEAN:
      return ANSWER_DATA;
    default:
      return state;
  }
}
