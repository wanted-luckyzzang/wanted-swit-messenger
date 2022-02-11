import MessageModal from 'components/messageModal/messageModal';
import './messageCard.scss';
import { useSelector } from 'react-redux';
import { StoreState } from 'types/store/stateType';

const MessageCard = (): JSX.Element => {
  const messageState = useSelector((state: StoreState) => state.message);

  console.log(messageState);

  return (
    <>
      {messageState.map((msg) => (
        <div className='message-card-container'>
          <MessageModal />
          <div className='messageCard'>
            <div className='user-profile'>
              <img className='image' src={msg.profileImage} alt='profileImage' />
            </div>
            <div className='content'>
              <span className='name-date'>
                <span className='name'>{msg.userName}</span>
                <span className='date'>{msg.date}</span>
              </span>
              <div className='message'>{msg.content}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageCard;
