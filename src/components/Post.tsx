import { Prisma } from '@prisma/client';
import { prisma } from '~/lib/prisma';
import { format } from 'date-fns';

type Post = Prisma.PostGetPayload<{}>;

interface Props {
  post: Post;
}

async function Post({ post }: Props) {
  const author = await prisma.user.findUnique({ where: { id: post.authorId } });

  return (
    <article className='flex w-full flex-col items-stretch gap-y-2 rounded-md bg-teal-50 p-5 shadow-md'>
      <h4 className='text-xl font-semibold '> {post.title} </h4>
      <p className=''> {post.body} </p>
      <div className='aaa space-x-3 text-xs italic text-gray-500'>
        <span>By: {author?.name}</span>
        <span>At: {format(post.createdAt, 'Pp')} </span>
      </div>
    </article>
  );
}
export default Post;
