import "./SignUp.scss";

const Login = () => {
  return(
    <>
      <form className='SignUpContainer'>
        <header className='SignUpHeader'>
          <h1>로그인</h1>
        </header>
        <section className='SignUpSection'>
          <div className='SignUpInfo'>
            <h4>아이디</h4>
            <input type="text" placeholder='아이디를 입력하세요'/>
          </div>
          <div className='SignUpInfo'>
            <h4>비밀번호</h4>
            <input type="password" placeholder='비밀번호를 입력하세요'/>
          </div>
          <div>
            <button className='SignUpButton' type='submit'>로그인</button>
          </div>
        </section>
      </form>
    </>
  )
}

export default Login;