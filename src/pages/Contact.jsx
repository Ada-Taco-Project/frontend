import { useState } from "react";
import Header from "../components/Header";
import './Contact.css';

const Contact = () => {
  const [fileName, setFileName] = useState("선택된 파일");

  const onClickUpload = () => {
    let myInput = document.getElementById("input-hidden");
    myInput.click();
  };

  const onFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
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
            <div style={{ marginTop: "5.5rem" }}>첨부파일</div>
          </div>
          <div className="contact-input">
            <input type="text" placeholder="닉네임" />
            <input type="text" placeholder="이메일" />
            <input style={{ marginTop: "1rem" }} type="text" placeholder="제목을 작성해주세요" />
            <textarea />
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
          <button>문의하기</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
