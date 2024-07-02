"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/new");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Create Todo</button>
    </div>
  );
};

export default Home;
