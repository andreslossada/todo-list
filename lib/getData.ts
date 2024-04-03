import { prisma } from "@/utils/prisma";

export async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
