import { useNavigate } from 'react-router-dom'; 
import Header from "../components/Header";
import './SelectLanguage.css';

const SelectLanguage = () => {
  const navigate = useNavigate(); 

  const handleLanguageSelect = (language) => {
    navigate(`/selectlanguage/${language}`); 
  };

  return (
    <div>
      <Header />
      <div className="language_title">
        <h2>언어 선택</h2>
        <p>연습할 프로그래밍 언어를 선택해주세요.</p>
      </div>
      <div className="language_main_button">
        <button onClick={() => handleLanguageSelect('C')}>
          <img src="../images/devicon_c.png" alt="C로고" />
          <div>C</div>
        </button>
        <button className="language_button" onClick={() => handleLanguageSelect('Java')}>
          <img src="../images/devicon_java.png" alt="JAVA로고" />
          <div>JAVA</div>
        </button>
        <button className="language_button" onClick={() => handleLanguageSelect('Python')}>
          <img src="../images/devicon_python.png" alt="PYTHON로고" />
          <div>PYTHON</div>
        </button>
      </div>
    </div>
  );
};

export default SelectLanguage;
