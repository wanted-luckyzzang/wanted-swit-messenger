import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

interface userInfo {
  profileImg: string | ArrayBuffer | undefined;
}

const Test = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPwd] = useState('');
  const [profileImg, setProfileImg] = useState({
    profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  });
  // const [userInfo, setUserInfo] = useState({
  //   userId: "",
  //   username: "",
  //   password: "",
  // })

  const userData = {
    username: username,
    password: password,
    profileImage: profileImg.profileImage,
  };

  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('가입 되었습니다.');
    navigate('/login');
  };

  const ChangeUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const ChangePwdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      if (reader.readyState === 2) {
        console.log(reader.result);
        // setProfileImg({
        //   profileImage: reader.result
        // })
      }
    };
    // reader.readAsDataURL(e.target.files[0])
  };

  return (
    <>
      <form className='signup-container' onSubmit={SubmitHandler}>
        <header className='signup-Header'>
          <h1>회원가입</h1>
        </header>
        <section className='signup-Section'>
          <div className='signtup-profileEdit'>
            <h1>프로필 이미지</h1>
            <div className='signtup-profileEdit-imgBox'>
              <img src={profileImg.profileImage} alt='' id='img' className='img' />
            </div>
            <input type='file' accept='image/*' name='image-upload' id='input' onChange={imageHandler} />
            <div className='label'>
              <label htmlFor='input'>이미지를 등록해주세요.</label>
            </div>
          </div>
          <div>
            <div className='signup-info'>
              <h4>아이디</h4>
              <input
                value={username}
                onChange={ChangeUsernameHandler}
                name='username'
                type='text'
                placeholder='아이디를 입력하세요'
                required
              />
            </div>
            <div className='signup-info'>
              <h4>비밀번호</h4>
              <input
                value={password}
                onChange={ChangePwdHandler}
                name='password'
                type='password'
                placeholder='비밀번호를 입력하세요'
                autoComplete='auto'
                required
              />
            </div>
            <div className='signup-buttonBox'>
              <button className='signup-button' type='submit'>
                가입
              </button>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Test;
