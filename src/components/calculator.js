import { useState } from 'react';

const Calculator = () => {
  // Declare state variables for the two input fields
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  // Function to handle resetting the input fields to 0
  const reset = () => {
    setFirstNumber(0);
    setSecondNumber(0);
  };

  // Calculate the sum dynamically
  const sum = firstNumber + secondNumber;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">Simple Calculator</h1>

      {/* Input fields for the two numbers */}
      <div className="mb-4">
        <input
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(+e.target.value)} // Ensure the input is treated as a number
          className="border border-gray-400 p-2 mr-2"
        />
        <input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(+e.target.value)} // Ensure the input is treated as a number
          className="border border-gray-400 p-2"
        />
      </div>

      {/* Display the calculated sum */}
      <p className="text-2xl font-semibold mb-4">
        Sum: <span>{sum}</span>
      </p>

      {/* Reset Button */}
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default Calculator;