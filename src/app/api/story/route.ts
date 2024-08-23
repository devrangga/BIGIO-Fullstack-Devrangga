import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const stories = await prisma.story.findMany({
      include: {
        chapter: true,
      },
    });

    return NextResponse.json({ stories });
  } catch (error) {
    NextResponse.json({ error });
  } finally {
    await prisma.$disconnect();
  }
}
