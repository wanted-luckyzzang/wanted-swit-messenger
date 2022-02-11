import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";

const Test = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPwd] = useState('')
  // const [userInfo, setUserInfo] = useState({
  //   userId: "",
  //   username: "",
  //   password: "",
  // })
  const [profileImg, setProfileImg] = useState(
    {profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
  );
  
  const userData = {
    userId: userId,
    username: username,
    password: password,
    profileImage: profileImg.profileImage,
  }
  // console.log(userData);

  // dispatch()

  const SubmitHandler = (e) => {
    e.preventDefault();
    alert("가입 되었습니다.");
    navigate("/login");
  }

  const ChangeIdHandler = (e) => {
    setUserId(e.target.value);
  }
  const ChangeUsernameHandler = (e) => {
    setUsername(e.target.value);
  }

  const ChangePwdHandler = (e) => {
    setPwd(e.target.value);
  }

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setProfileImg({profileImage: reader.result})
      }
    }
    console.log(e)
    reader.readAsDataURL(e.target.files[0])
  };
  

  return(
    <>
      <form className='SignUpContainer'  onSubmit={SubmitHandler}>
        <header className='SignUpHeader'>
          <h1>회원가입</h1>
        </header>
        <section className='SignUpSection'>
          <div className="SignUpProfileEdit">
					  <h1>프로필 이미지</h1>
            <div className="img-holder">
              <img src={profileImg.profileImage} alt="" id="img" className="img" />
            </div>
            <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
            <div className="label">
              <label className="image-upload" htmlFor="input">
                이미지를 등록해주세요.
              </label>
            </div>
				  </div>
          <div>
            <div className='SignUpInfo'>
              <h4>아이디</h4>
              <input value={userId} onChange={ChangeIdHandler} name="userId" type="text" placeholder='아이디를 입력하세요' required/>
            </div>
            <div className='SignUpInfo'>
              <h4>닉네임</h4>
              <input value={username} onChange={ChangeUsernameHandler} name="username" type="text" placeholder='닉네임을 입력하세요' required/>
            </div>
            <div className='SignUpInfo'>
              <h4>비밀번호</h4>
              <input value={password} onChange={ChangePwdHandler} name="password" type="password" placeholder='비밀번호를 입력하세요' autoComplete='auto' required/>
            </div>
            <div className='SignUpButtonBox'>
              <button className='SignUpButton' type='submit'>가입</button>
            </div>
          </div>
        </section>
      </form>
    </>
  )
}

export default Test;