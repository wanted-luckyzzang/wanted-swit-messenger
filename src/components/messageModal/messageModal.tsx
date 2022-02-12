import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerMessage } from 'store/actions';
import { useBlockScroll } from 'hooks/useBlockScroll';
import { MessageData, StoreState } from 'types/store';
import DeleteModal from './deleteModal';
import './messageModal.scss';

const MessageModal = (props: { data: MessageData }): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    setModalActive(true);
  }, []);

  const answerHandler = useCallback(() => {
    const { userName, content } = props.data;
    const answer = `${userName}\n${content}\n(회신)\n`;
    dispatch(answerMessage({ content: answer }));
  }, [dispatch, props.data]);

  if (modalActive) {
    document.body.style.overflow = 'hidden';
  }
  useBlockScroll(modalActive);

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

export default React.memo(MessageModal);
