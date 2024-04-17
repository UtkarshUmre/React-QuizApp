import React from 'react';
import Options from './Options';

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <Options options={options} handleAnswer={handleAnswer} />
    </div>
  );
};

export default Question;
