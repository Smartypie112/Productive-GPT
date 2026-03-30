import { useState } from "react";
import FilterButton from "./FilterButton";
import Form from "./Form";
import Todo from "./Todo";
import useLocalStorage from "../lib/useLocalStorage";


const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

function TodoComp() {

  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useLocalStorage('todos', []);
const [showForm, setShowForm] = useState(false);
  const [completedAll, setCompletedAll] = useState(false);
  const [filter, setFilter] = useState("All");
  const [currentlyEditing, setCurrentlyEditing] = useState("");

  function addTodo(todo) {
    setTodos([
      ...todos, 
      todo
    ]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id){
    setTodos(todos.map((todo) => (
      todo.id === id ? {
        ...todo,
        completed: !todo.completed
      } : todo
    )))
  }

  function toggleAll(){
    setTodos(todos.map((todo) => (
      {
        ...todo,
        completed: !todo.completed
      }      
    )
    ));
  }

  function updateTodo(text, id){
    console.log(text)
    setTodos(todos.map((todo) => (
      todo.id === id ? {
        ...todo,
        text: text
      } : todo 
    )))
  }

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      name={name}
      key={name}
      isPressed={name === filter} 
      setFilter={setFilter}
    />
  ));

  return (
  <div className="rounded-xl min-h-screen bg-white text-violet-500 flex flex-col">
    

{/* Form (only show when clicked) */}
{showForm && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/30 z-40"
      onClick={() => setShowForm(false)}
    ></div>

    {/* Floating Form */}
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-4">
        <Form addTodo={addTodo} />
      </div>
    </div>
  </>
)}

  {/* Filters */}
  {/*    <div className={`flex gap-2 px-4 py-2 bg-transparent border-b overflow-x-auto ${!todos.length && "hidden"}`}>
      {filterList}
    </div>*/}

    {/* Todo List */}
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 ">
      {todos.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No tasks yet 👀
        </p>
      )}

      {todos
        .filter(FILTER_MAP[filter])
        .map(({ text, id, completed }) => (
          <div
            key={id}
            className="bg-gray-900 border rounded-lg px-3 py-2 flex items-center justify-between shadow-sm hover:shadow transition"
          >
            <Todo
              text={text}
              id={id}
              completed={completed}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
              isEditing={id === currentlyEditing}
              setCurrentlyEditing={setCurrentlyEditing}
            />
          </div>
        ))}
    </div>

{/* Floating Add Button */}
<button
  onClick={() => setShowForm(!showForm)}
  className="fixed bottom-6 right-6 w-14 h-14 rounded-full 
             bg-violet-500 text-white text-2xl 
             flex items-center justify-center 
             shadow-lg hover:scale-110 active:scale-95 transition z-50"
>
  {showForm ? "✕" : "+"}
</button>
  </div>
);
}

export default TodoComp;
