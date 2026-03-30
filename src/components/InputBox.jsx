function InputBox({ message, setMessage, sendMessage }) {
  return (
    <div className="min-w-full p-3 border-t flex gap-2 fixed bottom-0">
      <input
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />

      <button
        onClick={sendMessage}
        className="bg-violet-500  text-white px-4 rounded-full hover:bg-indigo-700 transition"
      >
        ↑
      </button>
    </div>
  );
}

export default InputBox;