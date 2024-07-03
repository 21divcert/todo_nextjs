import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//모든 todo 가져오기
export async function GET() {
  console.log("GET");
  const todos = await prisma.todo.findMany();
  console.log(todos);
  prisma.$disconnect();
  return NextResponse.json(todos, { status: 200 });
}

// todo 생성하기
export async function POST(request: Request) {
  //form 데이터로 받아올지 말지
  const { title, content } = await request.json();
  const todo = await prisma.todo.create({
    data: {
      title,
      content,
    },
  });
  prisma.$disconnect();
  return NextResponse.json(todo, { status: 201 });
}
