import { useEffect, useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import ChatPage from './components/ChatPage';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const handleSelectUser = (u) => {
    setSelectedUser(u);
  };

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <div className="flex h-screen">
      <Sidebar users={users} onAddUser={handleAddUser} onSelectUser={handleSelectUser} />
      {selectedUser ? (
        <ChatPage user={selectedUser} currentUser={user} />
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          Select a user to start chatting
        </div>
      )}
    </div>
  );
}

export default App;
