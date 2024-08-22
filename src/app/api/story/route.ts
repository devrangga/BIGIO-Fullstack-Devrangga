import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function GET(req: NextRequest, res: NextResponse) {
  try {
    const stories = await prisma.story.findMany({
      include: {
        chapter: true,
      },
    });

    return NextResponse.json({ stories });
  } catch (error) {
    NextResponse.json({ error }, { status: res.status });
  } finally {
    await prisma.$disconnect();
  }
}
