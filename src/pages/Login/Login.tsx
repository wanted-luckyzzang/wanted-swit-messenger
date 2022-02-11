import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../SignUp/SignUp";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPwd] = useState('')

  const ChangeUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const ChangePwdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  }
  
  const SubmitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert("로그인 되었습니다.");
    navigate("/main");
  }

  return(
    <>
      <form className='signup-container' onSubmit={()=>SubmitHandler}>
        <header className='signup-Header'>
          <h1>로그인</h1>
        </header>
        <section className='login-section'>
        <div className='signup-info'>
              <h4>아이디</h4>
              <input value={username} onChange={ChangeUsernameHandler} name="username" type="text" placeholder='아이디를 입력하세요' required/>
            </div>
            <div className='signup-info'>
              <h4>비밀번호</h4>
              <input value={password} onChange={ChangePwdHandler} name="password" type="password" placeholder='비밀번호를 입력하세요' autoComplete='auto' required/>
            </div>
          <div className='signup-buttonBox'>
            <button className='signup-button' type='submit'>로그인</button>
          </div>
        </section>
      </form>
    </>
  )
}

export default Login;