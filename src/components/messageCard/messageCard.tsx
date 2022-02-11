import MessageModal from "components/messageModal/messageModal";
import { useSelector } from "react-redux";
import { StoreState } from "types/store/stateType";
import "./messageCard.scss";

const MessageCard = () => {
  const messageState = useSelector((state: StoreState) => state.message)[1];
  console.log(messageState);
  return (
    <div className="container">
      <MessageModal />
      <div className="messageCard">
        <div className="user-profile">
          <img
            className="image"
            src={messageState?.profileImage}
            alt="profileImage"
          />
        </div>
        <div className="content">
          <span className="name-date">
            <span className="name">{messageState.userName}</span>
            <span className="date">{messageState.date}</span>
          </span>
          <div className="message">{messageState.content}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
