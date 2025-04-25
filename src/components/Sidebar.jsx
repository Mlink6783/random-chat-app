import { faker } from '@faker-js/faker';
import UserCard from './UserCard';

const Sidebar = ({ currentUser, users, setUsers, setSelectedUser }) => {
  const addRandomUser = () => {
    const newUser = {
      name: faker.person.firstName(),
      photo: faker.image.avatar(),
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="w-full md:w-64 border-r bg-white flex flex-col p-4 space-y-4">
      <button
        onClick={addRandomUser}
        className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
      >
        + Search User
      </button>
      <div className="flex-1 overflow-y-auto space-y-2">
        {users.map((user, i) => (
          <UserCard key={i} user={user} onClick={() => setSelectedUser(user)} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
