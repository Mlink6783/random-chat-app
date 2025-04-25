import { useState } from 'react';

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleLogin = () => {
    if (!name || !photo) return alert("Please provide name and photo.");
    const user = { name, photo };
    onLogin(user);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6">Login to Chat</h1>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded w-64 mb-4"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
          }
        }}
        className="mb-4"
      />
      {photo && <img src={photo} alt="Preview" className="w-20 h-20 rounded-full mb-4" />}
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
      >
        Enter Chat
      </button>
    </div>
  );
}

export default Login;
