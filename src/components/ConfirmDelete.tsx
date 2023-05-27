'use client';
import { useState, useTransition } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { modalDeleteAtom } from '~/lib/store';

interface Props {
  postId: string;
}

function ConfirmDelete({ postId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [, setOpen] = useAtom(modalDeleteAtom);
  const router = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);
    await axios.delete(`/api/posts/${postId}`);

    setIsLoading(false);
    startTransition(() => {
      router.refresh();
      setOpen(false);
    });
  };

  const isMutating = isLoading || isPending;

  return (
    <div className='flex flex-col items-center justify-start gap-y-2'>
      <p>Do you want to delete your post?</p>
      <button
        className='flex items-center justify-center gap-x-2 rounded-md bg-red-200 px-4 py-2 text-center font-semibold disabled:cursor-not-allowed disabled:bg-gray-400'
        disabled={isMutating}
        onClick={handleDelete}
      >
        {isMutating && <FontAwesomeIcon icon={faSpinner} className='fa-spin' />}
        Delete
      </button>
    </div>
  );
}
export default ConfirmDelete;
