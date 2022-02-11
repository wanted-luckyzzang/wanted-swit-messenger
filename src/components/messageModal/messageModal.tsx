import { useState } from 'react';
import { MessageData } from 'types/store';
import DeleteModal from './deleteModal';
import './messageModal.scss';
const MessageModal = (props: { data: MessageData }): JSX.Element => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const handleDelete = () => {
    setModalActive(true);
  };
  return (
    <>
      <div className="message-modal-container">
        <button className="message-modal-button">답글</button>
        <button className="message-modal-button" onClick={handleDelete}>
          삭제
        </button>
      </div>
      {modalActive && <DeleteModal data={props.data} />}
    </>
  );
};

export default MessageModal;
