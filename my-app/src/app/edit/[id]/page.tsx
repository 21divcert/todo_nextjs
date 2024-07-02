"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Edit = () => {
  const router = useRouter();
  //const { id } = router.params;
  //const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <button onClick={handleSubmit} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
