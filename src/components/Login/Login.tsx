import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cancel from '../../assets/cancel.png';
import { login } from 'store/actions';
import { DEFAULT_PROFILE } from 'store/data';
import { StoreState } from 'types/store';
import { getNewId } from 'store/reducers/utils';
import './Login.scss';

interface ModalType {
  setLoginModal: (loginModal: boolean) => void;
}

const Login = ({ setLoginModal }: ModalType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>();
  const [profileImage, setProfileImg] = useState<string>(DEFAULT_PROFILE);
  const messageState = useSelector((state: StoreState) => state.message);

  const imageHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const url = reader.result as string;
        setProfileImg(url);
      }
    };
    if (e.target.files) reader.readAsDataURL(e.target.files[0]);
  }, []);

  const ChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    },
    []
  );

  const submitHandler = () => {
    if (profileImage)
      dispatch(
        login({ userId: getNewId(messageState), userName, profileImage })
      );
    alert('환영합니다😍');
    navigate('/');
  };

  const CancelShowModal = useCallback(() => {
    setLoginModal(false);
  }, [setLoginModal]);

  return (
    <>
      <div className="login-container">
        <header className="login-Header">
          <span>Swit</span>
          <img src={cancel} onClick={CancelShowModal} alt="x-icon" />
        </header>
        <nav className="login-nav">
          <h2>회원가입 없이</h2>
          <h2>바로 대화에 참여해보세요!</h2>
        </nav>
        <form className="login-section" onSubmit={submitHandler}>
          <div className="login-profileEdit">
            <div>
              {profileImage && (
                <img src={profileImage} alt="" id="img" className="img" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              name="image-upload"
              id="input"
              onChange={imageHandler}
            />
            <div className="label">
              <label htmlFor="input">이미지 업로드</label>
            </div>
          </div>
          <div className="login-info">
            <input
              value={userName || ''}
              onChange={ChangeHandler}
              name="username"
              type="text"
              placeholder="아이디를 입력해 주세요"
              required
            />
          </div>
          <div className="login-buttonBox">
            <button className="login-button" type="submit">
              로그인
            </button>
          </div>
        </form>
      </div>
      <div className="login-overlay" onClick={CancelShowModal} />
    </>
  );
};

export default Login;
