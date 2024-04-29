import React, { useState } from "react";
import "./Item.css";

const Item = () => {
  const riddles = [
    {
      id: 1,
      description: "What has keys but can't open locks?",
      options: ["Piano", "Book", "Computer", "Door"],
      correct: 2
    },
    {
      id: 2,
      description: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      options: ["Tree", "Echo", "River", "Ghost"],
      correct: 2
    },
    {
      id: 3,
      description: "What can you see with your eyes closed?",
      options: ["People", "Sun", "Dreams", "Stone"],
      correct: 3
    },
    {
      id: 4,
      description: "What can be broken even if you don't touch it?",
      options: ["Law", "Air", "Face", "Heart"],
      correct: 4
    },
    {
      id: 5,
      description: "What can you see but not touch?",
      options: ["Light", "Music", "Dream", "Idea"],
      correct: 1
    }
  ];

  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (event) => {
    if (!selectedOption) {
      const optionIndex = Number(event.target.value);
      setSelectedOption(optionIndex);
    }
  };

  const handleNextRiddle = (event) => {
    event.preventDefault();

    if (!selectedOption) {
      alert("Please select an option before continuing.");
      return;
    }

    const currentRiddle = riddles[currentRiddleIndex];
    if (selectedOption === currentRiddle.correct) {
      setScore(score + 1);
    }

    if (currentRiddleIndex < riddles.length - 1) {
      setCurrentRiddleIndex(currentRiddleIndex + 1);
    } else {
      alert("You have answered all the riddles!");
    }

    setSelectedOption(null);
  };

  return (
    <div className="Item">
      {currentRiddleIndex < riddles.length ? (
        <form onSubmit={handleNextRiddle}>
          <div className="riddles">
            <h3>{riddles[currentRiddleIndex].description}</h3>
            <div className="options">
              {riddles[currentRiddleIndex].options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={index + 1}
                    checked={selectedOption === index + 1}
                    onChange={handleOptionSelect}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button type="submit" disabled={!selectedOption}>Next</button>
          </div>
        </form>
      ) : (
        <div className="result">
          <h2>You have answered all the riddles!</h2>
          <p>Your score: {score} out of {riddles.length}</p>
        </div>
      )}
    </div>
  );
};

export default Item;