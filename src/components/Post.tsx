import { Prisma } from '@prisma/client';
import { format } from 'date-fns';
import { prisma } from '~/lib/prisma';
import EditPost from './EditPost';
import { getServerSession } from 'next-auth';
import { authOptions } from '~/lib/auth';

type Post = Prisma.PostGetPayload<{}>;

interface Props {
  post: Post;
}

async function Post({ post }: Props) {
  const author = await prisma.user.findUnique({ where: { id: post.authorId } });
  const session = await getServerSession(authOptions);

  return (
    <article className='flex w-full flex-col items-stretch gap-y-2 rounded-md bg-teal-50 p-5 shadow-md'>
      <h4 className='text-xl font-semibold capitalize'> {post.title} </h4>
      <p className=''> {post.body} </p>
      <br />
      {session?.user.userId === post.authorId && (
        <EditPost title={post.title} body={post.body} postId={post.postId} />
      )}
      <div className='aaa space-x-3 text-xs italic text-gray-500'>
        <span>By: {author?.name}</span>
        <span>At: {format(post.createdAt, 'Pp')} </span>
      </div>
    </article>
  );
}
export default Post;
