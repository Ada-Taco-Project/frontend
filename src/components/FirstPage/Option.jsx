import React from 'react';
import './Option.css';

const Option = ({ image, text, colorClass }) => {
  return (
    <div className={`option ${colorClass}`}>
      <div className="color">
        <div className="img"><img src={image} alt={text} /></div>
        <div className="text"><b>{text}</b></div>
      </div>
      <div className="white"></div>
    </div>
  );
};

export default Option;