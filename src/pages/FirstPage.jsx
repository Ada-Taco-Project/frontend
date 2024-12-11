import React from 'react';
import Header from '../components/Header';
import Option from '../components/FirstPage/Option';
import { useNavigate } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
import './FirstPage.css';

const FirstPage = () => {
  const navigate = useNavigate();
  const { language } = useParams();

  const handleChooseLevelPage = () => {
    navigate(`/selectlanguage/${language}/chooseLevelPage`); 
  };
  return (
    <>
      <Header />
      <main>
        <div className='firstPage_title'>
          <h1>타자하기</h1>
          <p>초급, 중급, 고급, 번외 중 선택해주세요</p>
        </div>
        <div className="options">
          <button onClick={() => handleChooseLevelPage()}>
            <Option image="../images/robot_helping.png" text="자리/키워드(초급용)" colorClass="beginner" />
          </button>
          <Option image="../images/software_engineer.png" text="문법(중급용)" colorClass="intermediate" />
          <Option image="../images/advanced.png" text="코드(고급용)" colorClass="advanced" />
          <Option image="../images/bonus.png" text="번외용" colorClass="extra" />
        </div>
      </main>
    </>
  );
};

export default FirstPage;
