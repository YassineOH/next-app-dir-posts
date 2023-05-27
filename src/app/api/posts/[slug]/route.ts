import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/lib/prisma';

interface Params {
  params: {
    slug: string;
  };
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const postId = params.slug;

  const { title, body } = await req.json();

  await prisma.post.update({
    where: { postId },
    data: {
      title,
      body,
    },
  });

  return NextResponse.json({ msg: 'posted updated' });
}
