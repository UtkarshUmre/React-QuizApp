import React from 'react';
import Quiz from './components/Quiz';
import './App.css'; // You can create this file for styling if needed

function App() {
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Charles Dickens"],
      answer: "Harper Lee"
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Ge", "Au", "Ag"],
      answer: "Au"
    },
    {
      question: "In which year did World War II end?",
      options: ["1943", "1945", "1947", "1950"],
      answer: "1945"
    },
    {
      question: "Which planet is known as the 'Evening Star'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Venus"
    }
    // Add more questions here as needed
  ];

  return (
    <div className="App">
      <Quiz quizData={quizData} />
    </div>
  );
}

export default App;
