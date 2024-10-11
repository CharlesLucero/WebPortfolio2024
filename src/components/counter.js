import React, { useState } from "react";

const CounterApp = () => {
  // Declare state to keep track of the count
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(count * 2);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count / 2);
  };

  // Function to handle reset
  const reset = () => {
    setCount(1);
  };

  // Determine if count is odd or even
  const isEven = count % 2 === 0;

  // Determine counter color based on count value
  const counterColor =
    count > 0 ? "text-green-500" : count < 0 ? "text-red" : "text-black";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className={`text-7xl font-bold mb-4 font-spacemono ${counterColor}`}>
          Counter: {count}
        </h1>
        <p className="text-3xl font-kaushan">
          The number is {isEven ? "Even" : "Odd"}
        </p>

        <div className="mt-4 flex space-x-4">
          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-red text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
