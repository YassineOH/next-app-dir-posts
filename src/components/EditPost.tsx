'use client';

import { useAtom } from 'jotai';
import { modalFormAtom, postAtom, updatePostAtom } from '~/lib/store';

interface Props {
  title: string;
  body: string;
  postId: string;
}

function EditPost({ body, title, postId }: Props) {
  const [, setOpen] = useAtom(modalFormAtom);
  const [, setPost] = useAtom(postAtom);
  const [, setUpdatePost] = useAtom(updatePostAtom);

  const handleEdit = () => {
    setPost({ body, title, postId });
    setUpdatePost(true);
    setOpen(true);
  };

  const handleDelete = () => {
    console.log('post deleted', postId);
  };

  return (
    <div className='grid w-full grid-cols-2 items-stretch bg-transparent'>
      <button
        className='w-full py-2 text-sm text-gray-500 hover:text-teal-600'
        onClick={() => handleEdit()}
      >
        Edit post
      </button>
      <button
        className='w-full py-2 text-sm text-gray-500 hover:text-red-600'
        onClick={() => handleDelete()}
      >
        Delete post
      </button>
    </div>
  );
}
export default EditPost;
