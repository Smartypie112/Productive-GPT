function FloatingButton({ view, setView }) {
  const toggleView = () => {
    setView(view === "todo" ? "chat" : "todo");
  };

  return (
    <button
      onClick={toggleView}
      className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center 
                 bg-indigo-600 text-white text-xl rounded-full shadow-lg 
                 hover:bg-indigo-700 hover:scale-110 active:scale-95 
                 transition-all duration-200"
    >
      {view === "todo" ? "💬" : "📝"}
    </button>
  );
}

export default FloatingButton;