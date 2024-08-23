import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const story = await prisma.story.findUnique({
      where: {
        id: id,
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
