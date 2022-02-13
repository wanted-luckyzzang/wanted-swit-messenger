import { useRef, useState } from 'react';
import './Main.scss';
import { StoreState } from 'types/store';
import { useDispatch, useSelector } from 'react-redux';
import { answerClean, logout } from 'store/actions';
import { useBottomScroll } from 'hooks';
import MessageCard from 'components/messageCard/messageCard';
import MessageInput from 'components/messageInput/messageInput';
import Login from 'components/Login/Login';

const Main = () => {
  const dispatch = useDispatch();
  const messageState = useSelector((state: StoreState) => state.message);
  const userState = useSelector((state: StoreState) => state.auth);
  const [LoginModal, setLoginModal] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(answerClean());
    alert('로그아웃 되었습니다.');
  };

  useBottomScroll(messageState, scrollRef);

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

          <div className="header-row">
            <div className="header-title">Swit</div>
            {userState.userName ? (
              <div className="section-login" onClick={logoutHandler}>
                로그아웃
              </div>
            ) : (
              <div
                className="section-login"
                onClick={() => {
                  setLoginModal(!LoginModal);
                }}
              >
                로그인
              </div>
            )}
          </div>
        </div>
        <div className="main">
          <div className="sidebar">
            <div className="move-to-chat"></div>
          </div>
          <div className="section">
            <div className="section-navBox">
              <span className="nav">💛 General</span>
              {userState.userName ? (
                <span className="section-login" onClick={logoutHandler}>
                  로그아웃
                </span>
              ) : (
                <span
                  className="section-login"
                  onClick={() => {
                    setLoginModal(!LoginModal);
                  }}
                >
                  로그인
                </span>
              )}
            </div>
            <div className="chat-background">
              <div className="date-line">
                <div className="line"></div>
                <span className="date">Thursday, August 22, 2019</span>
                <div className="line"></div>
              </div>
              <div className="chat-section" ref={scrollRef}>
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
