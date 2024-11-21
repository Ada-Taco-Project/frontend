import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import './SignUpPage.css';

const SignUpPage = () => {
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(null); // null, true, false
  const [id, setId] = useState('');
  const [isIdValid, setIsIdValid] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [email, setEmail] = useState('');
  const [isCountdown, setIsCountdown] = useState(false);
  const [timer, setTimer] = useState(180); // 3분 = 180초

  useEffect(() => {
    if (isCountdown && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCountdown, timer]);

  const handleNicknameCheck = () => {
    if (nickname === '') {
      alert("닉네임을 입력하지 않았습니다.");
      setIsNicknameValid(false);
    }
    else if (nickname === '중복닉네임') {
      alert("중복입니다.");
      setIsNicknameValid(false);
    } else {
      alert("사용하실 수 있습니다.");
      setIsNicknameValid(true);
    }
  };

  const handleIdCheck = () => {
    if (id === '') {
      alert("아이디를 입력하지 않았습니다.");
      setIsIdValid(false);
    } else if (id === '중복아이디') {
      alert("중복입니다.");
      setIsIdValid(false);
    } else {
      alert("사용하실 수 있습니다.");
      setIsIdValid(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsPasswordMatch(e.target.value === password);
  };

  const handleEmailVerification = () => {
    setIsCountdown(true);
    setTimer(180);
  };

  const formattedTime = `${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`;

  return (
    <div className="SignUpPage">
      <Header />
      <div className="signUp-box">
        <h4>회원가입</h4>
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="*닉네임(최대 12자)"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              style={{
                borderColor: isNicknameValid === true ? '#00FF57' : isNicknameValid === false ? '#FF370C' : '#D8D8D8',
              }}
            />
            <button type="button" onClick={handleNicknameCheck} style={{ backgroundColor: isNicknameValid !== null ? '#D9D9D9' : '' }}>중복 확인</button>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="*아이디(최대 10자)"
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={{
                borderColor: isIdValid === true ? '#00FF57' : isIdValid === false ? '#FF370C' : '#D8D8D8',
              }}
            />
            <button type="button" onClick={handleIdCheck} style={{ backgroundColor: isIdValid !== null ? '#D9D9D9' : '' }}>중복 확인</button>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="*비밀번호(특수문자 사용, 최대 16자)"
              value={password}
              onChange={handlePasswordChange}
              style={{ borderColor: !isPasswordMatch ? '#FF370C' : '#D8D8D8' }}
          />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="*비밀번호 재확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{ borderColor: !isPasswordMatch ? '#FF370C' : '#D8D8D8' }}
            />
          </div>         
          <div className="input-group">
            <input
              type="email"
              placeholder="*이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" onClick={handleEmailVerification}>인증하기</button>
          </div>
          {isCountdown && (
            <div className="verification-timer">
              {formattedTime}
              <button type="button" onClick={handleEmailVerification}>인증번호 다시 받기</button>
            </div>
          )}
          <div className="input-group">
            <input type="text" placeholder="인증번호" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="github 닉네임/링크 (선택사항)" />
          </div>
          <button type="submit" style={{ marginTop: "5.2rem"  }}>회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
