import Header from '../components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../config/axiosConfig';
import './LoginPage.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 서버로 로그인 요청 보내기
      const response = await axiosInstance.post('/login', {
        id,
        password,
      });

      if (response.status === 200) {
        // 로그인 성공 처리
        alert('로그인 완료되었습니다.');
        setIsLoggedIn(true);
        navigate('/');
      } else {
        setErrorMessage('*아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      setErrorMessage('*아이디 또는 비밀번호가 잘못되었습니다.');
    }

    // 기존 로컬 테스트 로직 (임의 입력)
    if (id === 'user1234' && password === '1234') {
      alert('로그인 완료되었습니다.');
      setIsLoggedIn(true);
      navigate('/');
    } else {
      setErrorMessage('*아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className='LoginPage'>
      <Header />
      <div className="login-box">
        <h4>로그인</h4>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="아이디" 
            value={id}
            onChange={(e) => setId(e.target.value)} 
          />
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>       
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
