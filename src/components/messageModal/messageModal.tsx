import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { answerMessage } from 'store/actions';
import { MessageData } from 'types/store';
import DeleteModal from './deleteModal';
import './messageModal.scss';
const MessageModal = (props: { data: MessageData }): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setModalActive(true);
  };

  if (modalActive) {
    document.body.style.overflow = 'hidden';
  }
  const answerHandler = () => {
    const { userName, content } = props.data;
    const answer = `${userName}\n${content}\n(회신)\n`;
    dispatch(answerMessage({ content: answer }));
  };

  return (
    <>
      <div className="message-modal-container">
        <button className="message-modal-button" onClick={answerHandler}>
          답글
        </button>
        <button className="message-modal-button" onClick={handleDelete}>
          삭제
        </button>
      </div>
      {modalActive && (
        <DeleteModal data={props.data} setModalActive={setModalActive} />
      )}
    </>
  );
};

export default MessageModal;
