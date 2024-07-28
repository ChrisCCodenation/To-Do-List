import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import ArchiveList from "./ArchiveList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [archivedTodos, setArchivedTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const archiveTodo = (id) => {
    const todoToArchive = todos.find((todo) => todo.id === id);
    setArchivedTodos([...archivedTodos, todoToArchive]);
    deleteTodo(id);
  };

  return (
    <div className="toDoCont">
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        archiveTodo={archiveTodo}
      />
      <ArchiveList archivedTodos={archivedTodos} />
    </div>
  );
};

export default TodoApp;
