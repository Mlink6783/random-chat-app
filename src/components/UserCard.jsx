const UserCard = ({ user, onSelectUser }) => {
  return (
    <div
      onClick={() => onSelectUser(user)}
      className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
    >
      <img
        src={user.photo}
        alt={user.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="text-sm font-medium">{user.name}</div>
    </div>
  );
};

export default UserCard;
