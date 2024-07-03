"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const New = () => {
  const router = useRouter();
  const [todo, setTodo] = useState({ title: "", content: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({
          title: todo.title,
          content: todo.content,
        }),
      });
      console.log(res);
      setTodo({ title: "", content: "" });
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            name="content"
            value={todo.content}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
      <button onClick={() => handleCancel()}>Cancel</button>
    </div>
  );
};

export default New;
