import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '~/lib/auth';
import { prisma } from '~/lib/prisma';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("you're not authenticated");
  }

  const { body, title } = await req.json();

  const newPost = await prisma.post.create({
    data: {
      body,
      title,
      authorId: session.user.userId,
    },
  });

  return NextResponse.json(newPost);
}
