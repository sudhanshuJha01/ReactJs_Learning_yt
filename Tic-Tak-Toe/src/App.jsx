import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);
  if(value === null) {
    return (
      <button
        className="square"
        onClick={() => setValue('X')}
      >
        {value}
      </button>
    );
  }else{
    return (
      <button
        className="square"
        onClick={() => setValue('')}
      >
        {value}
      </button>
    )
  }
  
}

function App() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default App
