import Link from "next/link";
import React from "react";
import TodoListClientSide from "./TodoListClientSide";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "force-cache",
  }); // {cache:"force-cache"} for SSG and {cache:"no-cache"} for SSR
  return await res.json();
};
const TodoList = async () => {
  const todos:Todos = await fetchTodos();
  return (
    // <div className='bg-pink border-box'>{todos.slice(-6).map((todo:Todo)=> {return <p key={todo.id}><Link className=' hover:bg-lightblue' href={`/todo/${todo.id}`}>TAsk ID: {todo.id}</Link></p>}) }</div>
    <div className='bg-pink border-box'> <TodoListClientSide todos={todos} /></div>
  );
};

export default TodoList;
