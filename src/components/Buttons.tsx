'use client';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useAtom } from 'jotai';
import { errorAuthAtom } from '~/lib/store';

export function GoogleButton() {
  const [, setErrorAuth] = useAtom(errorAuthAtom);

  const handleSignIn = async () => {
    const res = await signIn('google', {
      redirect: false,
    });

    if (res?.ok) {
      redirect('/');
    }

    if (res?.error) {
      setErrorAuth(res.error);
    }
  };

  return (
    <button
      onClick={() => handleSignIn()}
      className='flex items-center justify-start gap-x-4 rounded-md border bg-white p-4'
    >
      <Image src='./google.svg' width={32} height={32} alt='google logo' />
      <span>Sign up with google</span>
    </button>
  );
}

export function GithubButton() {
  const [, setErrorAuth] = useAtom(errorAuthAtom);

  const handleSignIn = async () => {
    const res = await signIn('github', {
      redirect: false,
    });

    if (res?.ok) {
      redirect('/');
    }
    if (res?.error) {
      setErrorAuth(res.error);
    }
  };
  return (
    <button
      onClick={() => handleSignIn()}
      className='flex items-center justify-start gap-x-4 rounded-md border bg-white p-4'
    >
      <Image src='./github.svg' width={32} height={32} alt='google logo' />
      <span>Sign up with github</span>
    </button>
  );
}

export function LogoutButton() {
  return (
    <button
      className='cursor-pointer rounded-md bg-red-600 px-4 py-2 text-white'
      onClick={() => signOut()}
    >
      logout
    </button>
  );
}
