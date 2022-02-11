import MessageModal from 'components/messageModal/messageModal';
import { MessageData } from 'types/store';
import './messageCard.scss';
import ProfilePhoto from './profilePhoto';

const MessageCard = (props: { msg: MessageData }): JSX.Element => {
  return (
    <div className='message-card-container'>
      <MessageModal data={props.msg} />
      <div className='message-card'>
        <div className='user-profile'>
          <ProfilePhoto image={props.msg.profileImage} />
        </div>
        <div className='content'>
          <span className='name-date'>
            <span className='name'>{props.msg.userId === 3 ? `${props.msg.userName}*` : props.msg.userName}</span>
            <span className='date'>{props.msg.date}</span>
          </span>
          <div className='message'>{props.msg.content}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
