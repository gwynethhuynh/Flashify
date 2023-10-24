import React, { useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'What is 2 + 2?', answer: '4' },
    { id: 3, question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="App">
      <div className="flashcard-container">
        <div className="flashcard">
          <div className="flashcard-content">
            <h2>Flashcard</h2>
            <p>{showAnswer ? cards[currentIndex].answer : cards[currentIndex].question}</p>
          </div>
          <div className="flashcard-buttons">
            <button onClick={handleShowAnswer} className="show-answer">Show Answer</button>
            <button onClick={handleNextCard} className="next-card">Next Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
