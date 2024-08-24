import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const story = await prisma.story.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ story });
  } catch (error) {
    return NextResponse.json({ error: `errornyea ${error}` });
  } finally {
    await prisma.$disconnect();
  }
}
