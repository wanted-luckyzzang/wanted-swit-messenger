import { ANSWER, ANSWER_CLEAN } from './actionType';

export interface AnswerParams {
  userName: string | undefined;
  content: string | undefined;
}
const answerMessage = ({ userName, content }: AnswerParams) => {
  return {
    type: ANSWER,
    payload: { userName, content },
  };
};

const answerClean = () => {
  return {
    type: ANSWER_CLEAN,
  };
};
export { answerMessage, answerClean };
