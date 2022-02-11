import { useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'store/actions';
import { StoreState } from 'types/store';
import "../Login/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state: StoreState) => state.auth);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImg] = useState<string>();

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

  const submitHandler = () => {
    const { current } = inputEl;
    const userName = current?.value;
    if(profileImage)
      dispatch(login({userName, profileImage}))
    navigate("/main")
  }

  return (
    <>
      <div className='signup-container'>
        <header className='signup-Header'>
          <h1>로그인</h1>
        </header>
        <section className='login-section'>
        <div className='signup-info'>
          <h4>아이디</h4>
          <input ref={inputEl} name="username" type="text" placeholder='아이디를 입력하세요' required/>
        </div>
        <div className="signtup-profileEdit">
					  <h1>프로필 이미지</h1>
            <div className="signtup-profileEdit-imgBox">
              {profileImage && <img src={profileImage} alt="" id="img" className="img" />}
            </div>
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
            <div className="label">
              <label htmlFor="input">
                이미지를 등록해주세요.
              </label>
            </div>
				  </div>
        <div className='signup-buttonBox'>
          <button className='signup-button' onClick={submitHandler}>로그인</button>
        </div>
        </section>
      </div>
    </>
  );
};

export default Login;
