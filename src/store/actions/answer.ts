import { ANSWER, ANSWER_CLEAN } from './actionType';

export interface AnswerParams {
  content: string | undefined;
}
const answerMessage = ({ content }: AnswerParams) => {
  return {
    type: ANSWER,
    payload: { content },
  };
};

const answerClean = () => {
  return {
    type: ANSWER_CLEAN,
  };
};
export { answerMessage, answerClean };
