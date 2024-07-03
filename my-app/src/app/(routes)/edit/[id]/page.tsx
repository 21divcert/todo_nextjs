"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Edit = () => {
  const router = useRouter();
  const { id } = useParams();
  const [todo, setTodo] = useState({ title: "", content: "" });

  // 특정 id의 todo 가져오기
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/todos/${id}`, {
        method: "GET",
      });
      const todoData = await res.json();
      setTodo({
        title: todoData.title,
        content: todoData.content,
      });
      console.log(todo);
    }
    fetchData();
  }, []);

  //todo 수정버튼 클릭시 실행
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: todo.title,
          content: todo.content,
        }),
      });
      console.log(res);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 텍스트 인풋 값 상태 업데이트
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Edit Todo</h1>
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
        <button onClick={handleSubmit} type="submit">
          Update
        </button>
      </form>
      <button onClick={handleSubmit}>Cancel</button>
    </div>
  );
};

export default Edit;
