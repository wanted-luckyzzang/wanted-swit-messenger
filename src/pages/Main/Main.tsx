import './Main.scss';
import { useSelector } from 'react-redux';
import { StoreState } from 'types/store';
import MessageCard from 'components/messageCard/messageCard';
import MessageInput from 'components/messageInput/messageInput';

const Main = () => {
  const messageState = useSelector((state: StoreState) => state.message);
  return (
    <div className='main-container'>
      <div className='header'>
        <div className='home-wrap'>
          <div className='home-icon'></div>
        </div>
        <div className='header-title'>Swit</div>
      </div>
      <div className='main'>
        <div className='sidebar'>
          <div className='move-to-chat'></div>
        </div>
        <div className='section'>
          <div className='nav'>💛General</div>
          <div className='chat-background'>
            <div className='date-line'>
              <div className='line'></div>
              <span className='date'>Thursday, August 22, 2019</span>
              <div className='line'></div>
            </div>
            <div className='chat-section'>
              {messageState.map((data) => (
                <MessageCard key={data.userId} msg={data} />
              ))}
            </div>
          </div>
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Main;
