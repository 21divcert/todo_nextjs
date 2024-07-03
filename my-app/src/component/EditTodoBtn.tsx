"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface EditTodoBtnProps {
  id: number;
}

const EditTodoBtn: React.FC<EditTodoBtnProps> = ({ id }) => {
  const router = useRouter();
  const todoId = id;
  const handleEdit = async () => {
    router.push(`/edit/${todoId}`);
  };
  return <button onClick={handleEdit}>Edit</button>;
};
export default EditTodoBtn;
