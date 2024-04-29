import React, { useState } from "react";
import "./Item.css";

const Item = () => {
  const [riddles, setRiddles] = useState([]);
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAddRiddle = (event) => {
    event.preventDefault();
    const riddle = {
      description: event.target.querySelector(
        'input[name="riddle-description"]'
      ).value,
      option1: event.target.querySelector('input[name="option1"]').value,
      option2: event.target.querySelector('input[name="option2"]').value,
      option3: event.target.querySelector('input[name="option3"]').value,
      option4: event.target.querySelector('input[name="option4"]').value,
      correct: Number(event.target.querySelector('input[name="correct"]').value),
    };
    setRiddles([...riddles, riddle]);
    event.target.reset();
  };

  const handleOptionSelect = (event) => {
    setSelectedOption(Number(event.target.value));
  };

  const handleNextRiddle = (event) => {
    event.preventDefault();
    const currentRiddle = riddles[currentRiddleIndex];
    if (selectedOption === currentRiddle.correct) {
      setScore(score + 1);
    }
    setCurrentRiddleIndex(currentRiddleIndex + 1);
    setSelectedOption(null);
  };

  return (
    <div className="Item">
      <div className="add-riddle">
        <h2>Add a new riddle</h2>
        <form onSubmit={handleAddRiddle}>
          <label htmlFor="riddle-description">Riddle:</label>
          <input type="text" name="riddle-description" required />
          <br />
          <label htmlFor="option1">Option 1:</label>
          <input type="text" name="option1" required />
          <br />
          <label htmlFor="option2">Option 2:</label>
          <input type="text" name="option2" required />
          <br />
          <label htmlFor="option3">Option 3:</label>
          <input type="text" name="option3" required />
          <br />
          <label htmlFor="option4">Option 4:</label>
          <input type="text" name="option4" required />
          <br />
          <label htmlFor="correct">Correct answer (1-4):</label>
          <input type="number" name="correct" min="1" max="4" required />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
      <hr />
      {currentRiddleIndex < riddles.length ? (
        <form onSubmit={handleNextRiddle}>
          <div className="riddles">
            <h3>{riddles[currentRiddleIndex].description}</h3>
            <div className="options">
              <label>
                <input
                  type="radio"
                  value={1}
                  checked={selectedOption === 1}
                  onChange={handleOptionSelect}
                />
                {riddles[currentRiddleIndex].option1}
              </label>
              <label>
                <input
                  type="radio"
                  value={2}
                  checked={selectedOption === 2}
                  onChange={handleOptionSelect}
                />
                {riddles[currentRiddleIndex].option2}
              </label>
              <label>
                <input
                  type="radio"
                  value={3}
                  checked={selectedOption === 3}
                  onChange={handleOptionSelect}
                />
                {riddles[currentRiddleIndex].option3}
              </label>
              <label>
                <input
                  type="radio"
                  value={4}
                  checked={selectedOption === 4}
                  onChange={handleOptionSelect}
                />
                {riddles[currentRiddleIndex].option4}
              </label>
            </div>
            <button type="submit" disabled={selectedOption === null}>Next</button>
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