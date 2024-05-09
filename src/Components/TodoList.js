// TodoList.js
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  const handleEditTodo = (index, todo) => {
    setEditIndex(index);
    setEditValue(todo);
  };

  const handleSaveEdit = () => {
    const newTodos = [...todos];
    newTodos[editIndex] = editValue;
    setTodos(newTodos);
    setEditIndex(null);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl text-center font-bold mb-4">Todo List</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
          className="px-4 py-2 w-full mr-2 border rounded-md"
        />
        <button
          onClick={handleAddTodo}
          className="px-2 w-auto bg-blue-500 text-white font-semibold rounded-md"
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 py-2 mb-2 bg-gray-100 rounded-md"
          >
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="px-4 py-2 w-full mr-2 border rounded-md"
              />
            ) : (
              <span>{todo}</span>
            )}
            <div>
              {editIndex === index ? (
                <button
                  onClick={handleSaveEdit}
                  className="text-green-500 mr-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditTodo(index, todo)}
                  className="text-blue-500 mr-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDeleteTodo(index)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
