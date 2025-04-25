import { useState } from 'react';

const ChatPage = ({ user, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSend = () => {
    if (!text && !image) return;
    setMessages([...messages, { sender: currentUser.name, text, image }]);
    setText('');
    setImage(null);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-3 bg-gray-100">
        <img
          src={user.photo}
          alt={user.name}
          className="w-10 h-10 rounded-full border"
        />
        <h2 className="font-semibold text-lg">{user.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-white">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[70%] p-3 rounded-xl shadow ${
              msg.sender === currentUser.name
                ? 'bg-blue-100 ml-auto'
                : 'bg-gray-200 mr-auto'
            }`}
          >
            {msg.text && <p className="text-sm">{msg.text}</p>}
            {msg.image && (
              <img
                src={msg.image}
                alt="sent"
                className="mt-2 rounded max-w-full"
              />
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-gray-50 flex flex-col sm:flex-row gap-2 items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 border rounded w-full sm:w-auto"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => setImage(reader.result);
              reader.readAsDataURL(file);
            }
          }}
          className="text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
