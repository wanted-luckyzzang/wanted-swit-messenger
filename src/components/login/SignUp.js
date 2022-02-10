import "./SignUp.scss";

const SignUp = () => {
  return(
    <>
      <form className='SignUpContainer'>
        <header className='SignUpHeader'>
          <h1>회원가입</h1>
        </header>
        <section className='SignUpSection'>
          <div className='SignUpProfileEdit'>
            <div>
              <img src="https://github.com/instagram-webclone/Instagram_FE/blob/master/src/image/profile.jpg?raw=true"/>
            </div>
            <button className='SignUpButton'>편집</button>
          </div>
          <div className='SignUpInfo'>
            <h4>아이디</h4>
            <input type="text" placeholder='아이디를 입력하세요'/>
          </div>
          <div className='SignUpInfo'>
            <h4>닉네임</h4>
            <input type="text" placeholder='닉네임을 입력하세요'/>
          </div>
          <div className='SignUpInfo'>
            <h4>비밀번호</h4>
            <input type="password" placeholder='비밀번호를 입력하세요'/>
          </div>
          <div>
            <button className='SignUpButton' type='submit'>가입</button>
          </div>
        </section>
      </form>
    </>
  )
}

export default SignUp;