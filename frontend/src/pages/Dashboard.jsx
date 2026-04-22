import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {users.map((user) => (
        <div key={user._id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}