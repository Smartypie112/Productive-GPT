import { useEffect, useState, useRef } from "react";
import trashcan from '../icons/trashcan.svg';
import edit from '../icons/edit.svg';

function Todo ({ text, id, completed, deleteTodo, toggleTodo, updateTodo, isEditing, setCurrentlyEditing }) {

  const [newText, setNewText] = useState(text);

  const editingInput = useRef(null);

  useEffect(() => {
    if (!isEditing) return;
    editingInput.current.focus();
  }, [isEditing]);
  
  function handleSubmit(e) {
    e.preventDefault();
    const text = newText.trim();
    if (!text) return;
    updateTodo(text, id);
    setCurrentlyEditing();
  }

  function handleEditInputChange (e) {
    setNewText(e.target.value);
    updateTodo(e.target.value, id);
  }

  function handleEditButtonClick (e) {
    isEditing ? setCurrentlyEditing("") : setCurrentlyEditing(id);
  }

  return (
<li
  className="bg-gray-900 flex items-start rounded-xl min-w-[80vw] px-4 py-3 shadow-sm hover:shadow-md transition"
>
  {/* Checkbox */}
  <input
    type="checkbox"
    checked={completed}
    onChange={() => toggleTodo(id)}
    className="w-5 h-5 accent-violet-500 cursor-pointer"
  />

  {/* Text / Edit */}
  {!isEditing ? (
<span
  className={`ml-3 flex-1 min-w-0 text-sm break-words whitespace-normal ${
    completed ? "line-through text-gray-400" : "text-white"
  }`}
>
  {text}
</span>
  ) : (
    <form onSubmit={handleSubmit} className="ml-3 flex-1">
      <input
        ref={editingInput}
        value={newText}
        onChange={handleEditInputChange}
        className="w-full px-2 py-1 border-b border-violet-400 
                   focus:outline-none focus:border-violet-600 text-sm"
      />
    </form>
  )}

  {/* Actions */}
  <div className="flex items-center gap-2 ml-2">
    <button
      onClick={handleEditButtonClick}
      className="p-2 rounded-lg hover:bg-gray-300 transition"
    >
      <img src={edit} alt="edit" className="w-4 h-4 opacity-70" />
    </button>

    <button
      onClick={() => deleteTodo(id)}
      className="p-2 rounded-lg hover:bg-red-100 transition"
    >
      <img src={trashcan} alt="delete" className="w-4 h-4 opacity-70" />
    </button>
  </div>
</li>
  )
}

export default Todo;
