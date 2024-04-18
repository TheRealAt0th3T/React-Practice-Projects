import React, { useEffect, useState } from "react";
import axios from "axios";

//https://reqres.in/api/users

export default function UsersAPI() {
  const [users, setUsers] = useState([]); //creating state users and initializing an empty array

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      Listing user's first and last names:
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
