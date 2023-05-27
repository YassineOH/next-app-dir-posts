'use client';

import { useAtom } from 'jotai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import {
  modalDeleteAtom,
  modalFormAtom,
  postAtom,
  updatePostAtom,
} from '~/lib/store';
import ConfirmDelete from './ConfirmDelete';
import Modal from './Modal';

interface Props {
  title: string;
  body: string;
  postId: string;
}

function EditPost({ body, title, postId }: Props) {
  const [open, setOpen] = useAtom(modalDeleteAtom);
  const [, setOpenForm] = useAtom(modalFormAtom);
  const [, setPost] = useAtom(postAtom);
  const [, setUpdatePost] = useAtom(updatePostAtom);

  const handleEdit = () => {
    setPost({ body, title, postId });
    setUpdatePost(true);
    setOpenForm(true);
  };

  const handleDelete = () => {
    setOpen(true);
  };

  return (
    <div className='grid w-full grid-cols-2 items-stretch bg-transparent'>
      <button
        className='flex w-full items-center justify-center gap-x-2 py-2 text-sm text-gray-500 hover:text-teal-600'
        onClick={() => handleEdit()}
      >
        <FontAwesomeIcon icon={faEdit} size='1x' />
        <span>Edit post</span>
      </button>
      <button
        className='flex w-full items-center justify-center gap-x-2 py-2 text-sm text-gray-500 hover:text-red-600'
        onClick={() => handleDelete()}
      >
        <FontAwesomeIcon icon={faTrash} size='1x' />
        <span>Delete post</span>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title='Delete Post'>
        <ConfirmDelete postId={postId} />
      </Modal>
    </div>
  );
}
export default EditPost;
