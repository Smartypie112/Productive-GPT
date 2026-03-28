function FloatingButton({ view, setView }) {
  const toggleView = () => {
    setView(view === "todo" ? "chat" : "todo");
  };

  return (
    <button
      onClick={toggleView}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "15px",
        borderRadius: "50%",
        fontSize: "18px",
        cursor: "pointer",
      }}
    >
      {view === "todo" ? "💬" : "📝"}
    </button>
  );
}

export default FloatingButton;