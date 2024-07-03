"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface DeleteTodoBtnProps {
  id: number;
}

const DeleteTodoBtn: React.FC<DeleteTodoBtnProps> = ({ id }) => {
  const todoId = id;
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
    });

    if (res.status !== 204) {
      alert("Failed to delete todo");
    } else alert("Todo deleted");

    router.refresh();
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteTodoBtn;
