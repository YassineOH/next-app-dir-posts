'use client';

import { useState } from 'react';
import Modal from './Modal';
import FormPost from './FormPost';

function AddPost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className='cursor-pointer rounded-md bg-teal-300 px-4 py-2'
        onClick={() => setOpen(true)}
      >
        Add post
      </button>
      <Modal title='add post' onClose={() => setOpen(false)} open={open}>
        <FormPost />
      </Modal>
    </>
  );
}
export default AddPost;
