import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
  id: number;
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <main className="container mx-auto p-4 bg-gray-200">
      <h1 className="text-3xl font-semibold text-center mb-6">My Users</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-white border rounded shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => navigate(`/users/${user.id}/albums`)}
            aria-label={`Go to albums of ${user.username}`}
            role="button"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{user.username}</span>
              <span className="text-gray-500 text-sm">{user.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UserList;
