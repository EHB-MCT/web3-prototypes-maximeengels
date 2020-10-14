import React from 'react';
import './App.css';
import { motion } from "framer-motion";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div className="buttons">
        <motion.button whileHover={{ scale: 1.1, backgroundColor: "#9BE60E", color: "rgb(0, 0, 0)", cursor: "pointer" }} whileTap={{ scale: 0.9, backgroundColor: "#B5E678" }} onClick={() => completeTodo(index)}>Complete</motion.button>
        <motion.button whileHover={{ scale: 1.1, backgroundColor: "#B02727", color: "rgb(255, 255, 255)", cursor: "pointer" }} whileTap={{ scale: 0.9, backgroundColor: "#F0A4A1", borderRadius: 50 }} onClick={() => removeTodo(index)}>x</motion.button>
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
        whileHover={{ width: "100%" , cursor: "pointer" }}
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
          <h1>An Audio Challenge Webapp</h1>
          <h3>A challenge a day keeps the laziness away :)</h3>
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
        <footer><p>A Framer Motion, React and Howler.js prototype</p></footer>
        {/* <div className="bg"></div> */}
      </div>
      <script src="/__/firebase/7.23.0/firebase-app.js"></script>
      <script src="/__/firebase/init.js"></script>
    </div>
  );
}

export default App;
