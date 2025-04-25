import { useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import ChatPage from './components/ChatPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {!currentUser ? (
        <Login onLogin={setCurrentUser} />
      ) : (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-lg bg-white rounded-xl overflow-hidden mt-4 h-[90vh]">
          <Sidebar
            currentUser={currentUser}
            users={users}
            setUsers={setUsers}
            setSelectedUser={setSelectedUser}
          />
          {selectedUser ? (
            <div className="flex-1">
              <ChatPage user={selectedUser} currentUser={currentUser} />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Select a user to start chatting
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
