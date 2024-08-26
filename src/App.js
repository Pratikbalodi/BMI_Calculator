import React, { useMemo, useState } from "react";
import './App.css'

const App = () => {
  const [Weight, setWeight] = useState(40);
  const [Height, setHeight] = useState(140);

  function setWeightChange(event) {
    setWeight(event.target.value);
    console.log(Weight)
  }
  function setHeightChange(event) {
    setHeight(event.target.value);
    console.log(Height)
  }
  const output = useMemo(()=>{
     const calHeight =Height/100;
     return (Weight / (calHeight*calHeight)).toFixed(2)
  },[Weight,Height])

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="innerData">
        <p className="slider-output">Weight:{Weight}kg</p>
        <input
          className="slider-input"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={setWeightChange}
        />
        <p className="slider-output">Height:{Height}cm</p>
        <input
          className="slider-input"
          type="range"
          step="1"
          min="140"
          max="250"
          onChange={setHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
