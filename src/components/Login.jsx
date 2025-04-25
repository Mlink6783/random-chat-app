import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !photo) return;
    onLogin({ name, photo });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 to-purple-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Welcome to Random Chat</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => setPhoto(reader.result);
              reader.readAsDataURL(file);
            }
          }}
        />
        {photo && (
          <img src={photo} alt="Preview" className="w-20 h-20 rounded-full mx-auto" />
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Enter Chat
        </button>
      </form>
    </div>
  );
};

export default Login;
