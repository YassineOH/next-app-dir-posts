'use client';

import { useAtom } from 'jotai';
import { errorAuthAtom } from '~/lib/store';

function ErrorAuth() {
  const [error] = useAtom(errorAuthAtom);

  if (error === undefined || error === '') {
    return <></>;
  }

  return (
    <div className='round-md w-full bg-red-700 p-2 text-center font-semibold'>
      {error}
    </div>
  );
}
export default ErrorAuth;
