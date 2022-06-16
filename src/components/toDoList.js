import React from "react";
import Todo from "./toDo";

export default function TodoList({ todos, toggleTodos }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} toDo={todo} toggleTodos={toggleTodos}></Todo>;
  });
}
