"use client";
import React from "react";
import { useRouter } from "next/navigation";

const New = () => {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <button type="submit">Create</button>
      </form>
      <button onClick={() => handleCancel()}>Cancel</button>
    </div>
  );
};

export default New;
