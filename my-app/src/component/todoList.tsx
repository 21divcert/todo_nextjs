// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// interface Todo {
//   id: number;
//   createAt: Date;
//   updateAt: Date;
//   title: string;
//   content: string;
// }

// const TodoList = ({ todoData }: { todoData: Todo[] }) => {
//   const router = useRouter();
//   const [todos, setTodo] = useState<Todo[]>([]);

//   useEffect(() => {
//     setTodo(todoData);
//   }, []);

//   const handleClick = () => {
//     router.push("/new");
//   };

//   return (
//     <div>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <h2>{todo.title}</h2>
//           <h4>{todo.content}</h4>
//           <p>{new Date(todo.createAt).toISOString()}</p>
//           <p>{new Date(todo.updateAt).toISOString()}</p>
//           <button onClick={() => router.push(`/edit/${todo.id}`)}>Edit</button>
//         </div>
//       ))}
//       {/* <button onClick={handleClick}>Create Todo</button> */}
//     </div>
//   );
// };

// export default TodoList;
