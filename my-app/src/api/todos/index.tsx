// import { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "../../lib/prisma";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     const todos = await prisma.todo.findMany();
//     res.status(200).json(todos);
//   }
//   else if (req.method === "POST") {
//     const { title, content } = req.body;
//     const newTodo = await prisma.todo.create({
//       data: { title, content },
//     });
//     res.status(201).json(newTodo);
//   }
//   else if (req.method === "PUT") {
//     const { id, title, content } = req.body;
//     const updatedTodo = await prisma.todo.update({
//       where: { id },
//       data: { title, content },
//     });
//     res.status(200).json(updatedTodo);
//   }
//   else if (req.method === "DELETE") {
//     const { id } = req.body;
//     const deletedTodo = await prisma.todo.delete({
//       where: { id },
//     });
//     res.status(200).json(deletedTodo);
//   }
//   else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos, { status: 200 });
}
