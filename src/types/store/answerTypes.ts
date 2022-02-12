import { ANSWER, ANSWER_CLEAN } from 'store/actions/actionType';
import { AnswerParams } from 'store/actions/answer';

interface AnswerAction {
  type: typeof ANSWER;
  payload: AnswerParams;
}

interface CleanAction {
  type: typeof ANSWER_CLEAN;
}

export type { AnswerAction, CleanAction };
