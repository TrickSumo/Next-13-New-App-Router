import React from "react";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return todos
    .slice(-6)
    .map((todo: Todo) => ({ params: { id: todo.id.toString() } }));
}

const fetchTodoData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: {
      revalidate: 300,
    },
  });
  console.log("api call made for", id);
  return await res.json();
};

const page = async ({ params: { id } }: Props) => {
  const todoData = await fetchTodoData(id);
  console.log(todoData);

  if (!todoData.id) return notFound();
  return (
    <div className="bg-cyberYellow">
      <p>
        {todoData.id}. {todoData.title}
      </p>
      <p>Completed:- {todoData.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black m-5 text-right">
        By User:- {todoData.userId}
      </p>
    </div>
  );
};

export default page;
