import "./Main.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "types/store";
import MessageCard from "components/messageCard/messageCard";
import Login from 'components/Login/Login';
import { useState } from 'react';

const Main = () => {
  const dispatch = useDispatch();

  const messageState = useSelector((state: StoreState) => state.message);
  const [LoginModal, setLoginModal] = useState<boolean>(true);
  const userState = useSelector((state:StoreState)=> state.auth);
  if (LoginModal) {
    document.body.style.overflow = "hidden";
  }

  const logoutHandler = () => {
    dispatch(userState.userName);
  }

  return (
    <>
    {LoginModal && !userState.userName && <Login setLoginModal={setLoginModal} />}
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
            <span className="section-login">로그인</span>
          ) : (
            <span className="section-login" onClick={logoutHandler}>로그아웃</span>
          )}
          </div>
          <div className="chat-background">
            <div className="date-line">
              <div className="line"></div>
              <span className="date">Thursday, August 22, 2019</span>
              <div className="line"></div>
            </div>
            <div className="chat-section">
              {messageState.map((data) => (
                <MessageCard key={data.userId} msg={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
