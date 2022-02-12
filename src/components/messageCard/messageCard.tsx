import MessageModal from 'components/messageModal/messageModal';
import { useCallback, useEffect, useRef } from 'react';
import { MessageData } from 'types/store';
import './messageCard.scss';
import ProfilePhoto from './profilePhoto';

const MessageCard = (props: { msg: MessageData }, messageState): JSX.Element => {
  const scrollEl = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = useCallback(() => {
    if (messageState) {
      scrollEl.current?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'nearest'});
    }
  }, [messageState]);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom])


  return (
    <div className='message-card-container'ref={scrollEl}>
      <MessageModal data={props.msg} />
      <div className='message-card' >
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
