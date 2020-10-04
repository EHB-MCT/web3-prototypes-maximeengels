import React from 'react';
import './App.css';
import { motion } from "framer-motion";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div className="buttons">
        <motion.button whileHover={{ scale: 1.1, backgroundColor: "#9BE60E", color: "smokeyblack", cursor: "pointer" }} whileTap={{ scale: 0.9, backgroundColor: "#B5E678" }} onClick={() => completeTodo(index)}>Complete</motion.button>
        <motion.button whileHover={{ scale: 1.1, backgroundColor: "#B02727", color: "white", cursor: "pointer" }} whileTap={{ scale: 0.9, backgroundColor: "#F0A4A1", borderRadius: 50 }} onClick={() => removeTodo(index)}>x</motion.button>
      </div>
    </div>
  );
};

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <motion.input
        whileHover={{ scale: 1.05, cursor: "pointer" }}
        type="text"
        className="input"
        placeholder="New item here"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React",
    isCompleted: false },
    { text: "Meet friend for lunch",
    isCompleted: false },
    { text: "Build really cool todo app",
    isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className="headers">
          <h1>Hi, this is a to-do list.</h1>
          <h3>Now delete everything and do whatever :)</h3>
        </div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
        <footer><p>A Framer Motion and React prototype</p></footer>
      </div>
    </div>
  );
}

export default App;
