import { useNavigate } from 'react-router-dom';
import './Main.css'

const Main = () => {
  const navigate = useNavigate();
  
  const handleSelectPage = () => {
    navigate('/SelectLanguage')
}

  return (
    <div className="Main">
      <div className="main-text-container">
      <h1>타코에 오신 것을</h1>
      <h1 style={{ marginTop: "-15px" }}>환영합니다!</h1>
      <p>타코에서 타자 연습을 하여 코딩 타자 속도를 향상 시켜보세요!</p>
      <button class="main-button" onClick={handleSelectPage}>시작하기</button>
    </div>
    <div className="main-image-container">
      <div></div>
      <img src="../images/bendy-man-developer-writing-programming-code.gif" alt="개발자"/>
    </div>
    </div>
  )
}

export default Main;