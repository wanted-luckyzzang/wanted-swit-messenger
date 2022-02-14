import React from 'react';
import { MessageData, StoreState } from 'types/store';
import MessageModal from 'components/messageModal/messageModal';
import ProfilePhoto from './profilePhoto';
import './messageCard.scss';
import { useSelector } from 'react-redux';

const MessageCard = (props: { msg: MessageData }): JSX.Element => {
  const userState = useSelector((state: StoreState) => state.auth);
  return (
    <div className="message-card-container">
      <MessageModal data={props.msg} />
      <div className="message-card">
        <div className="user-profile">
          <ProfilePhoto image={props.msg.profileImage} />
        </div>
        <div className="content">
          <span className="name-date">
            <span className="name">
              {props.msg.userId === userState.userId
                ? `${props.msg.userName}*`
                : props.msg.userName}
            </span>
            <span className="date">{props.msg.date}</span>
          </span>
          <div className="message">{props.msg.content}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MessageCard);
