import React, { useState, useEffect, useRef } from 'react';
import Header from "../components/Header";
import './SignUpPage.css';
import axiosInstance from'../config/axiosConfig.js'

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
    verificationCode: "",
    github: "",
  })
  // const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(null);
  // const [id, setId] = useState('');
  const [isIdValid, setIsIdValid] = useState(null);
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  // const [email, setEmail] = useState('');
  const [isCountdown, setIsCountdown] = useState(false);
  const [timer, setTimer] = useState(180);

  useEffect(() => {
    if (isCountdown && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsCountdown(false)
    }
  }, [isCountdown, timer]);

  //상태 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({...prev, [name]:value}))
    // console.log("formData 상태:", { ...formData, [name]: value });
  }

  const nameInputRef = useRef(null);
  // 닉네임 중복 확인
  const handleNicknameCheck = async () => {
    if (!formData.nickname) {
      alert("닉네임을 입력하세요.");
      setIsNicknameValid(false);
      nameInputRef.current.focus();
      return;
    }
  
    try {
      const response = await axiosInstance.post("/check-nickname", { 
        nickname: formData.nickname,
      });
      if (response.data.isValid) {
        alert("사용 가능한 닉네임입니다.");
        setIsNicknameValid(true);
      } else {
        alert(response.data.message || "중복된 닉네임입니다.");
        setIsNicknameValid(false);
      }
    } catch (error) {
      console.error("닉네임 확인 에러:", error);
      alert("닉네임 확인 중 문제가 발생했습니다.");
    }
  };
  
  const idInputRef = useRef(null);

  // 아이디 중복 확인
  const handleIdCheck = async () => {
    if (!formData.id) {
      alert("아이디를 입력하세요.");
      setIsIdValid(false);
      idInputRef.current.focus();
      return;
    }
  
    try {
      const response = await axiosInstance.post("/check-id", { 
        id: formData.id,
      });
      if (response.data.isValid) {
        alert("사용 가능한 아이디입니다.");
        setIsIdValid(true);
      } else {
        alert(response.data.message || "중복된 아이디입니다.");
        setIsIdValid(false);
      }
    } catch (error) {
      console.error("아이디 확인 에러:", error);
      alert("아이디 확인 중 문제가 발생했습니다.");
    }
  };
  
  

  // 비밀번호 확인
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // setPassword(e.target.value);
    setFormData((prev) => ({ ...prev, password: e.target.value })); 
    setIsPasswordMatch(e.target.value === formData.confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // setConfirmPassword(e.target.value);
    setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }));
    setIsPasswordMatch(e.target.value === formData.password);
  };

  // 이메일 인증
  const handleEmailVerification = async () => {
    if (!formData.email) {
      alert("이메일을 입력하세요.")
      return;
    }
  
    try {
      const response = await axiosInstance.post("/send-email", { 
        email: formData.email,
      });
      if (response.status === 200) {
        alert("인증번호가 이메일로 발송되었습니다.");
        setIsCountdown(true);
        setTimer(180); 
      }
    } catch (error) {
      console.error("이메일 인증 요청 에러:", error);
      alert("이메일 인증 요청 중 문제가 발생했습니다.");
    }
  };
  
  const handleVerifyCode = async () => {
    if (!formData.verificationCode) {
      alert("인증번호를 입력하세요.");
      return;
    }
  
    const verificationCode = ""; 
  
    try {
      const response = await axiosInstance.post("/verify-email", {
        email: formData.email,
        code: formData.verificationCode,
      });
  
      if (response.data.isValid) {
        alert("인증번호가 확인되었습니다.");
      } else {
        alert(response.data.message || "인증번호가 유효하지 않습니다.");
      }
    } catch (error) {
      console.error("인증번호 확인 에러:", error);
      alert("인증번호 확인 중 문제가 발생했습니다.");
    }
  };  

  // 회원가입 데이터 서버로 전송
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/signup", formData); // POST 요청
      if (response.status === 200) {
        alert("회원가입 성공!");
      }
    } catch (error) {
      console.error("에러 발생:", error);
      alert("회원가입 실패. 서버와 연결되지 않았습니다.");
    }
  };

  // 인증 타이머 포맷
  const formattedTime = `${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`;

  return (
    <div className="SignUpPage">
      <Header />
      <div className="signUp-box">
        <h4>회원가입</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              ref={nameInputRef}
              type="text"
              placeholder="*닉네임(최대 12자)"
              name="nickname"
              value={formData.nickname}
              maxLength={12}
              onChange={handleChange}
              style={{
                borderColor: isNicknameValid === true ? '#00FF57' : isNicknameValid === false ? '#FF370C' : '#D8D8D8',
              }}
            />
            <button type="button" onClick={handleNicknameCheck}>
              {isNicknameValid === true ? "사용 가능" : "중복 확인"}
            </button>
          </div>
          <div className="input-group">
            <input
              ref={idInputRef}
              type="text"
              placeholder="*아이디(최대 10자)"
              name="id"
              value={formData.id}
              maxLength={10}
              onChange={handleChange}
              style={{
                borderColor: isIdValid === true ? '#00FF57' : isIdValid === false ? '#FF370C' : '#D8D8D8',
              }}
            />
            <button type="button" onClick={handleIdCheck}>
              {isIdValid === true ? "사용 가능" : "중복 확인"}
            </button>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="*비밀번호(특수문자 사용, 최대 16자)"
              name='password'
              value={formData.password}
              maxLength={16}
              onChange={handlePasswordChange}
              style={{ borderColor: !isPasswordMatch ? '#FF370C' : '#D8D8D8' }}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="*비밀번호 재확인"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{ borderColor: !isPasswordMatch ? '#FF370C' : '#D8D8D8' }}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="*이메일"
              name="email"
              value={formData.email}
              maxLength={320}
              onChange={handleChange}
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
            <input 
              type="text" 
              placeholder="인증번호"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange} />
            <button type="button">인증확인</button>
          </div>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="github 닉네임/링크 (선택사항)"
              name='github'
              value={formData.github}
              onChange={handleChange} 
            />
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
