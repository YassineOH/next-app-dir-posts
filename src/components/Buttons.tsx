'use client';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export function GoogleButton() {
  return (
    <button
      onClick={() => signIn('google')}
      className='flex items-center justify-start gap-x-4 rounded-md border bg-white p-4'
    >
      <Image src='./google.svg' width={32} height={32} alt='google logo' />
      <span>Sign up with google</span>
    </button>
  );
}

export function GithubButton() {
  return (
    <button
      onClick={() => signIn('github')}
      className='flex items-center justify-start gap-x-4 rounded-md border bg-white p-4'
    >
      <Image src='./github.svg' width={32} height={32} alt='google logo' />
      <span>Sign up with github</span>
    </button>
  );
}
