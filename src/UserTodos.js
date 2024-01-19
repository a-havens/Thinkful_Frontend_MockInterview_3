import React, { useEffect, useState } from "react";

function UserTodos(props) {
  const { user } = props;
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(false);
  
    const handleUserClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setShowTodos(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
  <div>
      <p onClick={handleUserClick} style={{ cursor: "pointer" }}>
        {user.name}
      </p>
      {showTodos && (
        <div>
          <h3>Todos for {user.name}:</h3>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
        )}
      </div>
    );
}

export default UserTodos;
