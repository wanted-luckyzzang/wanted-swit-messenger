import React, { useCallback, useState } from 'react';
import './messageModal.scss';
import { MessageData } from 'types/store';
import { useDispatch } from 'react-redux';
import { answerMessage } from 'store/actions';
import { useBlockScroll, useControlModal } from 'hooks';
import DeleteModal from './deleteModal';

const MessageModal = (props: { data: MessageData }): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const dispatch = useDispatch();

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
        <button
          className="message-modal-button"
          onClick={useControlModal(setModalActive, true)}
        >
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
