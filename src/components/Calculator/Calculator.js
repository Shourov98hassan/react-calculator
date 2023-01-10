import React from 'react';
import './Calculator.css'

const Calculator = () => {
  const [result,setResult] = ("");
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
      </div>
    </div>
  );
};

export default Calculator;