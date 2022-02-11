import { useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'store/actions';
import { StoreState } from 'types/store';
import "../Login/Login.scss";
import cancel from "../../assets/cancel.png"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state: StoreState) => state.auth);
  const inputEl = useRef<HTMLInputElement | null>(null);
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

  const submitHandler = () => {
    const { current } = inputEl;
    const userName = current?.value;
    if(profileImage)
      dispatch(login({userName, profileImage}))
    navigate("/main")
  }

  return (
    <>
      <div className='login-container'>
        <header className='login-Header'>
          <span>Swit</span>
        </header>
        <nav className='login-nav'>
          <h2>회원가입 없이</h2>
          <h2>바로 대화에 참여해보세요!</h2>
        </nav>
        <section className='login-section'>
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
              <input ref={inputEl} name="username" type="text" placeholder='아이디 입력' required/>
            </div>
          <div className='login-buttonBox'>
            <button className='login-button' onClick={submitHandler}>로그인</button>
          </div>
        </section>
      </div>
      <div className='login-layout'/>
    </>
  );
};

export default Login;
