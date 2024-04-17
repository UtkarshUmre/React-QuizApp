import React, { useState } from 'react';

const Options = ({ options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
    handleAnswer(option);
  };

  return (
    <div className="options-container">
      {options.map((option, index) => {
        const isCorrectOption = option === options[options.length - 1];
        const isSelectedAndCorrect = selectedOption === option && isCorrectOption;
        const isSelectedAndIncorrect = selectedOption === option && !isCorrectOption;

        return (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={isSelectedAndCorrect ? 'correct' : isSelectedAndIncorrect ? 'incorrect' : ''}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
