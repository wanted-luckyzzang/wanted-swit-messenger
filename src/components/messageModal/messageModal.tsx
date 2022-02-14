import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerMessage } from 'store/actions';
import { useBlockScroll } from 'hooks/useBlockScroll';
import { MessageData, StoreState } from 'types/store';
import DeleteModal from './deleteModal';
import './messageModal.scss';

const MessageModal = (props: { data: MessageData }): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const userState = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    if (userState.userId === props.data.userId) setModalActive(true);
    else alert('자신의 메세지만 삭제할 수  있습니다.');
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
