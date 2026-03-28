import { useState } from "react";
import Todo from "./components/Todo";
import Chat from "./components/Chat";
import FloatingButton from "./components/FloatingButton";

function App() {
  const [view, setView] = useState("todo");

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Productivity App 🚀</h1>

      {view === "todo" ? <Todo /> : <Chat />}

      <FloatingButton view={view} setView={setView} />
    </div>
  );
}

export default App;