import React, {useState} from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */

  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  
  /* You will need some function to handle the key pressed and button events */
  const handleNumAChange = (event) => {
    setNumA(event.target.value);
    setReault('');
    setError('');
  }
  const handleNumBChange = (event) => {
    setNumB(event.target.value);
    setReault('');
    setError('');
  }

const handleCompute = () => {
  const a = Number(numA);
  const b = Number(numB);

  if (isNaN(a) || isNaN(b)) {
    setError("Please enter valid numbers");
    setResult('');
  } else {
    setResult(a + b);
    setError('');
  }
};
  

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={numA} onChange={handleNumAChange}/>

      <label>B =</label>
      <input value={numB} onChange={handleNumBChange} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={error || result} style={{color: error ? 'red' : 'white'}}/>
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
