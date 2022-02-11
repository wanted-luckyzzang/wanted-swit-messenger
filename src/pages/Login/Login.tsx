import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'store/actions';
import { StoreState } from 'types/store';
import '../SignUp/SignUp';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state: StoreState) => state.auth);
  const inputEl = useRef<HTMLInputElement | null>(null);

  const submitHandler = () => {
    const { current } = inputEl;
    const userName = current?.value;
    dispatch(login({ userName }));
    // navigate("/main")
  };

  return (
    <>
      <div className='signup-container'>
        <header className='signup-Header'>
          <h1>로그인</h1>
        </header>
        <section className='login-section'>
          <div className='signup-info'>
            <h4>아이디</h4>
            <input ref={inputEl} name='username' type='text' placeholder='아이디를 입력하세요' required />
          </div>
          <div className='signup-buttonBox'>
            <button className='signup-button' onClick={submitHandler}>
              로그인
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
