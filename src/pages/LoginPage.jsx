import Header from '../components/Header'
import { useState } from 'react';
import './LoginPage.css'

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 서버에서 사용자 인증 결과에 따라
    const loginSuccess = false; 
    if (!loginSuccess) {
      setErrorMessage("*아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className='LoginPage'>
      <Header />
      <div className="login-box">
      <h4>로그인</h4>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="아이디" />
          <div>
            <input
              type="password"
              placeholder="비밀번호"
            />
          </div>       
          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          <button type="submit">로그인</button>
        </form>
      </div>
      
    </div>
  )
}

export default LoginPage