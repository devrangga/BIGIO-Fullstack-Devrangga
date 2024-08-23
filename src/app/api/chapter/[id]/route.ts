import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const chapterId = params.id;

    const chapter = await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
      select: { storyId: true },
    });

    const story = await prisma.story.findUnique({
      where: {
        id: chapter?.storyId,
      },
      include: {
        chapter: true,
      },
    });

    return NextResponse.json({ story });
  } catch (error) {
    return NextResponse.json({ error: `errornyea ${error}` });
  } finally {
    await prisma.$disconnect();
  }
}
