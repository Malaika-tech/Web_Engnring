import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
      <button className="reset" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
