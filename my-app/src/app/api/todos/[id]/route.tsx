import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

// 특정 id의 todo 가져오기
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await prisma.todo.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  prisma.$disconnect();
  return NextResponse.json(res, { status: 200 });
}

// 특정 id의 todo 수정하기
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { title, content } = await request.json();
  const res = await prisma.todo.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      title,
      content,
    },
  });
  prisma.$disconnect();
  return NextResponse.json(res, { status: 202 });
}

// 특정 id의 todo 삭제하기
// !주요 응답 코드 204 보낼 땐 json 떼고 보내야 함. 그리고 null 값 넣어서 응답 코드만 보내야한다.
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.todo.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  prisma.$disconnect();
  return new NextResponse(null, { status: 204 });
}
