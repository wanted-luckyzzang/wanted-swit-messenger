import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'types/store';
import { logout } from 'store/actions';
import MessageCard from 'components/messageCard/messageCard';
import MessageInput from 'components/messageInput/messageInput';
import './Main.scss';
import Login from 'components/Login/Login';
import { useBlockScroll } from 'hooks/useBlockScroll';

const Main = () => {
  const dispatch = useDispatch();

  const messageState = useSelector((state: StoreState) => state.message);
  const [LoginModal, setLoginModal] = useState<boolean>(true);
  const userState = useSelector((state: StoreState) => state.auth);
 
 useBlockScroll(LoginModal);

  const logoutHandler = () => {
    dispatch(logout());
    alert("로그아웃 되었습니다.")
  }

  return (
    <>
      {LoginModal && !userState.userName && (
        <Login setLoginModal={setLoginModal} />
      )}
      <div className="main-container">
        <div className="header">
          <div className="home-wrap">
            <div className="home-icon"></div>
          </div>
          <div className="header-title">Swit</div>
        </div>
        <div className="main">
          <div className="sidebar">
            <div className="move-to-chat"></div>
          </div>
          <div className="section">
          <div className='section-navBox'>
          <span className="nav">💛General</span>
          {userState.userName ? (
            <span className="section-login" onClick={logoutHandler}>로그아웃</span>
          ) : (
            <span className="section-login" onClick={()=> {setLoginModal(true)}}>로그인</span>
          )}
          </div>
            <div className="chat-background">
              <div className="date-line">
                <div className="line"></div>
                <span className="date">Thursday, August 22, 2019</span>
                <div className="line"></div>
              </div>
              <div className="chat-section">
                {messageState.map((data, idx) => (
                  <MessageCard key={idx} msg={data} />
                ))}
              </div>
              <MessageInput />
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Main;
