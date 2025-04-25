import React from 'react';
import UserCard from './UserCard';
import { faker } from '@faker-js/faker';

const Sidebar = ({ users, onAddUser, onSelectUser }) => {
  const addRandomUser = () => {
    const newUser = {
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      photo: faker.image.avatarGitHub(),
    };
    onAddUser(newUser);
  };

  return (
    <div className="w-72 border-r overflow-y-auto bg-white">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Users</h2>
        <button
          onClick={addRandomUser}
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onSelectUser={onSelectUser} />
      ))}
    </div>
  );
};

export default Sidebar;
