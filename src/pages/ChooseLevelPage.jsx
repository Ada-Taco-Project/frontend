import React from 'react';
import Header from '../components/Header';
import Option from '../components/FirstPage/Option';
import './ChooseLevelPage.css';

const ChooseLevelPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className='chooseLevelPage_title'>
          <h1>단계 선택</h1>
          <p>자리/키워드 중 원하는 것을 선택해주세요.</p>
        </div>
        <div className="options">
          <Option image="/images/abc_book.png" text="자리 연습" colorClass="seats" />
          <Option image="/images/coding_workplace.png" text="키워드 연습" colorClass="keyword" />
        </div>
      </main>
    </>
  );
};

export default ChooseLevelPage;
