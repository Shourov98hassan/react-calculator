import React, { useState } from 'react';

const Calculator = () => {
    const [zero,setZero] = useState(0);
    const [one,setOne] = useState(1);
    const [two,setTwo] = useState(2);
    const [three,setThree] = useState(3);
    const [add,setAdd] = useState("+");
    const [result,setResult] = useState("");
    const [reset,setReset] = useState("");
    const handleZero=()=>{
       console.log(zero)
    }

    const handleOne=()=>{
        console.log(one)
     }

     const handleTwo=()=>{
        console.log(two)
     }
     const handleThree=()=>{
        console.log(three)
     }

     const handleAdd=()=>{
        console.log(add)
     }

     const addResult=()=>{
        const total = two + one;
       console.log("The Sum is " + total)
     }

    



    return (
        <div>
            <button onClick={handleZero}>0</button>
            <button onClick={handleOne}>1</button>
            <button onClick={handleTwo}>2</button>
            <button onClick={handleThree}>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
            <button>/</button>
            <button onClick={handleAdd}>+</button>
            <button>-</button>
            <button onClick={addResult}>=</button>
            <button>C</button>
        </div>
    );
};

export default Calculator;