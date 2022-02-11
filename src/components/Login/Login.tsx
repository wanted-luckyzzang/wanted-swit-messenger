import React, { useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'store/actions';
import "./Login.scss";
import cancel from "../../assets/cancel.png"

const Login = ({setLoginModal}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>()
  const [profileImage, setProfileImg] = useState<string>("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        const url = reader.result as string;
        setProfileImg(url)
      }
    }
    if(e.target.files)
      reader.readAsDataURL(e.target.files[0])
  };

  const ChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  const submitHandler = () => {
    if(profileImage)
      dispatch(login({userName, profileImage}))
    alert("환영합니다😍")
    navigate("/main");
  }

  const CancelShowModal = () => {
    setLoginModal(false);
  }

  return (
    <>
      <div className='login-container'>
        <header className='login-Header'>
          <span>Swit</span>
          <img src={cancel} onClick={CancelShowModal}/>
        </header>
        <nav className='login-nav'>
          <h2>회원가입 없이</h2>
          <h2>바로 대화에 참여해보세요!</h2>
        </nav>
        <form className='login-section' onSubmit={submitHandler}>
          <div className="login-profileEdit">
              <div>
                {profileImage && <img src={profileImage} alt="" id="img" className="img" />}
              </div>
              <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
              <div className="label">
                <label htmlFor="input">
                  이미지 등록
                </label>
              </div>
            </div>
            <div className='login-info'>
              <input value={userName || ""} onChange={ChangeHandler} name="username" type="text" placeholder='아이디를 입력해 주세요' required/>
            </div>
          <div className='login-buttonBox'>
            <button className='login-button' type="submit">로그인</button>
          </div>
        </form>
      </div>
      <div className='login-overlay' onClick={CancelShowModal}/>
    </>
  );
};

export default Login;
