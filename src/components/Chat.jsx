import { useState } from "react";
import InputBox from "./InputBox";

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, { text: message, sender: "user" }]);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { text: "AI reply to: " + message, sender: "ai" },
      ]);
    }, 500);

    setMessage("");
  };

  return (
      <div className="w-full max-w-md min-h-[100vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        

        {/* Chat Messages */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
          {chat.length === 0 && (
            <p className="text-gray-400 text-center mt-10">
              Start a conversation...
            </p>
          )}

          {chat.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-xl max-w-[75%] text-sm shadow
                  ${
                    msg.sender === "user"
                      ? "bg-indigo-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
     <InputBox 
 className="fixed bottom-0"
  message={message} 
  setMessage={setMessage} 
  sendMessage={sendMessage} 
/>
      </div>
  );
}

export default Chat;