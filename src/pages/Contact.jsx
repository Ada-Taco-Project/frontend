import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Header from "../components/Header";
import './Contact.css';

const Contact = () => {
  const [fileName, setFileName] = useState("선택된 파일");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const navigate = useNavigate(); 

  // 로그인 여부를 확인하는 로직
  useEffect(() => {
    // 로그인 상태를 확인 (임시로 localStorage를 사용)
    const loggedIn = localStorage.getItem("loggedIn") === "true"; // 임시: 실제로는 API 호출
    setIsLoggedIn(loggedIn);
  
    if (!loggedIn) {
      alert("로그인 후 이용할 수 있는 페이지입니다.");
      navigate("/login"); 
    }
  }, [navigate]);

  const onClickUpload = () => {
    let myInput = document.getElementById("input-hidden");
    myInput.click();
  };

  const onFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const contactCompleted = () => {
    const fields = [
      { ref: nameRef, name: "이름" },
      { ref: emailRef, name: "이메일" },
      { ref: titleRef, name: "제목" },
      { ref: contentRef, name: "내용" },
    ];

    let firstInvalidField = null;

    fields.forEach(field => {
      const input = field.ref.current;
      if (!input.value.trim()) {
        input.style.border = "2px solid #FF370C";
        if (!firstInvalidField) {
          firstInvalidField = input;
        }
      } else {
        input.style.border = ""; 
      }
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      alert(`${fields.find(f => f.ref.current === firstInvalidField).name}를(을) 입력해주세요.`);
      return;
    }

    alert('문의작성이 완료되었습니다.');
    navigate("/"); 
  };

  return (
    <div className="Contact">
      <Header />
      <div className="contact-container">
        <h3>문의하기</h3>
        <div className="contact-box">
          <div className="contact-name">
            <div>*이름</div>
            <div>*이메일</div>
            <div style={{ marginTop: "1rem" }}>*제목</div>
            <div>*내용</div>
            <div className="contact-file">첨부파일</div>
          </div>
          <div className="contact-input">
            <input type="text" placeholder="닉네임" ref={nameRef} />
            <input type="text" placeholder="이메일" ref={emailRef} />
            <input
              style={{ marginTop: "1rem" }}
              type="text"
              placeholder="제목을 작성해주세요"
              ref={titleRef}
            />
            <textarea ref={contentRef} />
            <div className="file-select">
              <input type="text" placeholder="선택된 파일" readOnly value={fileName} />
              <div className="file-upload">
                <input type="file" id="input-hidden" onChange={onFileChange} style={{ display: "none" }} />
                <button onClick={onClickUpload}>파일 올리기</button>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-button">
          <button onClick={contactCompleted}>문의하기</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
