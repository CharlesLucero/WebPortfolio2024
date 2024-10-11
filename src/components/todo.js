import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const TodoList = () => {
  // State to hold the list of to-do items
  const [todos, setTodos] = useState([]);
  // State to hold the input value for adding new to-do items
  const [inputValue, setInputValue] = useState("");

  // Function to handle adding a new to-do item
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue(""); // Clear the input field after adding
    }
  };

  // Function to toggle the completion status of a to-do item
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed; // Toggle completion status
    setTodos(newTodos);
  };

  // Function to remove a to-do item
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove the item at the specified index
    setTodos(newTodos);
  };

  // Function to remove all completed to-do items
  const removeCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed); // Keep only the uncompleted items
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-9xl font-bold mb-4 text-darkorange font-kaushan">
        To-Do List
      </h1>

      {/* Input field for new to-do items */}
      <div className="mb-4 ">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value
          placeholder="Add a new to-do..."
          className="border rounded border-darkblue p-2 mr-2"
        />
        <button
          onClick={addTodo}
          className="bg-darkblue text-white py-2 px-4 rounded-lg mx-2"
        >
          Add
        </button>
        <button
        onClick={removeCompleted}
        className="bg-red text-white mt-4 px-4 py-2 rounded-lg"
      >
        <FontAwesomeIcon icon={faTrash} className="mx-2" />
      </button>
      </div>

      {/* To-Do List */}
      <ul className="list-none w-full max-w-md">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 border-b border-slash"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)} // Toggle completion status on checkbox change
              className="mr-2"
            />
            <span
              onClick={() => toggleTodo(index)} // Toggle completion status on click
              className={`cursor-pointer ${
                todo.completed
                  ? "line-through text-red"
                  : "text-black text-xl font-spacemono uppercase"
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(index)} // Remove the item on button click
              className="bg-red text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default TodoList;
