import "./messageModal.scss";
const MessageModal = (): JSX.Element => {
  return (
    <div className="message-modal-container">
      <button className="message-modal-button">답글</button>
      <button className="message-modal-button">삭제</button>
    </div>
  );
};

export default MessageModal;
