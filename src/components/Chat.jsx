import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!message) return;

    setChat([...chat, { text: message, sender: "user" }]);

    // Fake AI response
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { text: "AI reply to: " + message, sender: "ai" },
      ]);
    }, 500);

    setMessage("");
  };

  return (
    <div>
      <h2>AI Chat</h2>

      <div style={{ minHeight: "200px" }}>
        {chat.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;