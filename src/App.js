import React, { useState } from 'react';
import './style.css';
import TodoList from './TodoList'
export default function App() {
  const [todo, setTodo] = useState("");
  const [listItem, setListItem] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    setListItem((oldItems) => {
      return [...oldItems, todo];
    });
    setTodo('');
  };

  return (
    <>
      <h1>Todo list</h1>
      <hr />
      <input placeholder="Enter a todo" name="todo" onChange={handleChange} />
      <br />
      <br />
      <button onClick={handleClick}>Click me </button>
      <ol>
        {listItem.map((data) => {
          return <TodoList text={data} />;
        })}
      </ol>
    </>
  );
}
