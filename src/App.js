import React, { useEffect, useState } from "react";
import UserTodos from './UserTodos.js'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <UserTodos key={user.id} user={user}/>
      ))}
    </div>
  );
}

export default App;
