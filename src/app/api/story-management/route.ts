import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const stories = await prisma.story.findMany({
      include: {
        chapter: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json({ stories });
  } catch (error) {
    return NextResponse.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}
