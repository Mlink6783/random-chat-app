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
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b flex items-center gap-3">
        <img src={user.photo} alt={user.name} className="w-10 h-10 rounded-full" />
        <h2 className="font-medium">{user.name}</h2>
      </div>
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs p-2 rounded-lg ${msg.sender === currentUser.name ? 'bg-blue-100 ml-auto' : 'bg-gray-100 mr-auto'}`}
          >
            {msg.text && <p>{msg.text}</p>}
            {msg.image && <img src={msg.image} alt="sent" className="mt-1 max-w-full rounded" />}
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 border rounded"
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
