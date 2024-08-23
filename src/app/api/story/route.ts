import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const story = await prisma.story.create({
      data: {
        title: body.title,
        writers: body.writers,
        synopsis: body.synopsis,
        category: body.category,
        status: body.status,
      },
    });
    return NextResponse.json({ story });
  } catch (error) {
    return NextResponse.json({ error: `errornyeaa ${error}` });
  } finally {
    await prisma.$disconnect();
  }
}
