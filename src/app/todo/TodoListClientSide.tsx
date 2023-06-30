"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const TodoListClientSide = ({ todos }: { todos: Todos }) => {
  const [isSelected, setIsselected] = useState(0);
  return (
    <>
      {todos.slice(-9).map((todo: Todo) => (
        <p key={todo.title}>
          <Link
            onClick={() => {
              setIsselected(todo.id);
            }}
            className={`${
              isSelected === todo.id ? "bg-orange" : "bg-pink"
            } hover:bg-lightblue`}
            href={`/todo/${todo.id}`}
          >
            TAsk ID: {todo.id}
          </Link>
        </p>
      ))}
    </>
  );
};

export default TodoListClientSide;
