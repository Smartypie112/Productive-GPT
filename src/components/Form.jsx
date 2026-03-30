import { useState } from "react";
import { nanoid } from 'nanoid';
import plus from '../icons/plus.svg';

function Form ({ addTodo }) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const todoText = text.trim();
    if (!todoText) return;
    addTodo({
      text: todoText,
      id: `todo-${nanoid()}`,
      completed: false
    });
    clearForm();
  }

  function clearForm() {
    setText("");
  }

  return (
<form
  onSubmit={handleSubmit}
  className="flex items-center gap-2 w-full"
>
  {/* Input */}
  <input
    type="text"
    name="todo"
    placeholder="Add a new task..."
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="flex-1 px-4 py-3 rounded-full border border-gray-300 
               focus:outline-none focus:ring-2 focus:ring-violet-500 
               focus:border-violet-500 transition"
  />

  {/* Add Button */}
  <button
    type="submit"
    className="w-12 h-12 rounded-full bg-violet-500 text-white 
               flex items-center justify-center shadow-md 
               hover:bg-violet-600 active:scale-95 transition"
  >
    <img src={plus} alt="add" className="w-5 h-5 invert" />
  </button>
</form>
  )
}

export default Form;