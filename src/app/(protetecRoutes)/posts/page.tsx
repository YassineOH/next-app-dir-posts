import AddPost from '~/components/AddPost';
import Post from '~/components/Post';

import { prisma } from '~/lib/prisma';

async function Posts() {
  const posts = await prisma.post.findMany();

  return (
    <div className='w-full'>
      <AddPost />
      <h2 className='my-1 text-center text-lg'>All posts</h2>
      <div className='my-3 grid grid-cols-3 items-start gap-4'>
        {posts.map((post) => {
          return (
            <>
              {/* @ts-expect-error Server Component */}
              <Post post={post} key={post.postId} />
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Posts;
