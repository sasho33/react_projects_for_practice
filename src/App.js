import React from 'react';
import './index.scss';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter}</h1>
        <button className="minus" onClick={decrement}>
          - Минус
        </button>
        <button className="plus" onClick={increment}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
