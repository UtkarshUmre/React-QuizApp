import React, { useState, useEffect } from 'react';
import Question from './Question';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // Initial timer value in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        // Move to the next question if time runs out
        handleNextQuestion();
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, currentQuestion]); // Run effect when timer or currentQuestion changes

  const handleAnswer = (selectedOption) => {
    const question = quizData[currentQuestion];
    if (selectedOption === question.answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setTimer(10); // Reset timer for the next question
  };

  return (
    <div className="quiz-container">
      {currentQuestion < quizData.length ? (
        <div>
          <div className="timer">Time remaining: {timer} seconds</div>
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            handleAnswer={handleAnswer}
          />
        </div>
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
