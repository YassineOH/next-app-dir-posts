import { Fragment } from 'react';
import AddPost from '~/components/AddPost';
import Post from '~/components/Post';

import { prisma } from '~/lib/prisma';

async function Posts() {
  const posts = await prisma.post.findMany();

  return (
    <div className='w-full space-y-4 text-center'>
      <AddPost />
      <div className='mx-auto my-3 grid  w-11/12 grid-cols-1  items-start gap-4 text-left md:w-full md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => {
          return (
            <Fragment key={post.postId}>
              {/* @ts-expect-error Server Component */}
              <Post post={post} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
export default Posts;
