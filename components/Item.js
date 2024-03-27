import React, { useState } from 'react';
import './Item.css';

const Item = () => {
  const riddles = [
    {
      id: 1,
      description: "What has keys but can't open locks?",
      option1: "Piano",
      option2: "Book",
      option3: "Computer",
      option4: "Door",
      correct: 2
    },
    {
      id: 2,
      description: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      option1: "Tree",
      option2: "Echo",
      option3: "River",
      option4: "Ghost",
      correct: 2
    },
    {
      id: 3,
      description: "What can you see with your eyes closed?",
      option1: "People",
      option2: "Sun",
      option3: "Dreams",
      option4: "Stone",
      correct: 3
    },
    {
      id: 4,
      description: "What can be broken even if you don't touch it?",
      option1: "Law",
      option2: "Air",
      option3: "Face",
      option4: "Heart",
      correct: 4
    },
    {
      id: 5,
      description: "What can you see but not touch?",
      option1: "Light",
      option2: "Music",
      option3: "Dream",
      option4: "Idea",
      correct: 1
    }
  ];

  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const currentRiddle = riddles[currentRiddleIndex];
    if (option === currentRiddle.correct) {
      setScore(score + 1);
    }
  }

  const handleNextRiddle = () => {
    setCurrentRiddleIndex(currentRiddleIndex + 1);
    setSelectedOption(null);
  }

  return (
    <div className="Item">
      {currentRiddleIndex < riddles.length ? (
        <div className="riddles">
          <h3>{riddles[currentRiddleIndex].description}</h3>
          <div className="options">
            <div className={`option ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => handleOptionSelect(1)}>{riddles[currentRiddleIndex].option1}</div>
            <div className={`option ${selectedOption === 2 ? 'selected' : ''}`} onClick={() => handleOptionSelect(2)}>{riddles[currentRiddleIndex].option2}</div>
            <div className={`option ${selectedOption === 3 ? 'selected' : ''}`} onClick={() => handleOptionSelect(3)}>{riddles[currentRiddleIndex].option3}</div>
            <div className={`option ${selectedOption === 4 ? 'selected' : ''}`} onClick={() => handleOptionSelect(4)}>{riddles[currentRiddleIndex].option4}</div>
          </div>
          <button onClick={handleNextRiddle} disabled={selectedOption === null}>Next</button>
        </div>
      ) : (
        <div className="result">
          <h2>You have answered all the riddles!</h2>
          <p>Your score: {score} out of {riddles.length}</p>
        </div>
      )}
    </div>
  );
}

export default Item;
