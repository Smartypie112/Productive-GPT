import { useState } from "react";
import TodoComp from "./components/TodoComp";
import Chat from "./components/Chat";
import FloatingButton from "./components/FloatingButton";

function App() {
  const [view, setView] = useState("todo");

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX - touchEndX;

    // swipe left → go to chat
    if (distance > 50) {
      setView("chat");
    }

    // swipe right → go to todo
    if (distance < -50) {
      setView("todo");
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="h-screen"
    >
      <h1 className=""><span className="text-violet-500">Productive</span>GPT</h1>

      {view === "todo" ? <TodoComp /> : <Chat />}
    </div>
  );
}

export default App;