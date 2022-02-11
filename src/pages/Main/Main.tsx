import './Main.scss';
import MessageCard from 'components/messageCard/messageCard';

const Main = () => {
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
              <MessageCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
