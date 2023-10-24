import React, { useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'What is 2 + 2?', answer: '4' },
    { id: 3, question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <div className="flashcard-container">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlipCard}>
          <div className="front">
            <h2>Question</h2>
            <p>{cards[currentIndex].question}</p>
          </div>
          <div className="back">
            <h2>Answer</h2>
            <p>{cards[currentIndex].answer}</p>
          </div>
        </div>
      </div>
      <button onClick={handleNextCard} className="next-card">Next Card</button>
    </div>
  );
}

export default App;
