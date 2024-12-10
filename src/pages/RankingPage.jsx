import React, { useState } from 'react';
import './RankingPage.css';
import Header from '../components/Header';
import Beginner from '../components/RankingPage/Beginner'
import Middle from '../components/RankingPage/Middle'
import Advanced from '../components/RankingPage/Advanced'

const RankingPage = () => {
  const [level, setLevel] = useState(0); // 0: 초급 | 1: 중급 | 2: 고급

  const levels = [
    { name: '초급용', color: '#89ACE0', component: <Beginner /> },
    { name: '중급용', color: '#263A99', component: <Middle /> },
    { name: '고급용', color: '#03036B', component: <Advanced /> },
  ];

  const handlePrev = () => {
    setLevel((prevLevel) => (prevLevel - 1 + levels.length) % levels.length);
  };

  const handleNext = () => {
    setLevel((prevLevel) => (prevLevel + 1) % levels.length);
  };

  return (
    <div className="RankingPage">
      <Header />
      <div className="explanation">
        <button onClick={handlePrev}>&#9664;</button>
        <div className="text">
          <h1>타자랭킹</h1>
          <h5 style={{ color: levels[level].color }}>({levels[level].name})</h5>
        </div>
        <button onClick={handleNext}>&#9654;</button>
      </div>
      <div className="content">
        {levels[level].component}
      </div>
    </div>
  );
};

export default RankingPage;
