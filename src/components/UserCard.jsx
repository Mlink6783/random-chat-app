const UserCard = ({ user, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
    >
      <img
        src={user.photo}
        alt={user.name}
        className="w-10 h-10 rounded-full object-cover border"
      />
      <div>
        <p className="font-medium">{user.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
