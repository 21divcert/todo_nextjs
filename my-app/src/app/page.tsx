import React from "react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteTodoBtn from "@/Component/DeleteTodoBtn";
import EditTodoBtn from "@/Component/EditTodoBtn";

const Home = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <h1>Home</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link key={todo.id} href={`/edit/${todo.id}`}>
            <h2>{todo.title}</h2>
          </Link>
          <h4>{todo.content}</h4>
          <p>{new Date(todo.createAt).toISOString()}</p>
          <p>{new Date(todo.updateAt).toISOString()}</p>
          <DeleteTodoBtn id={todo.id} />
          <EditTodoBtn id={todo.id} />
        </div>
      ))}
      <p>Click the button below to create a new todo</p>
      <Link href="/new">Create Todo</Link>
    </div>
  );
};

export default Home;
