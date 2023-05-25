import { getServerSession } from 'next-auth';
import { GithubButton, GoogleButton } from '~/components/Buttons';
import { authOptions } from '~/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log({ session });

  if (!session) {
    return (
      <main className='container mx-auto flex h-screen flex-col items-center justify-start gap-y-12 text-center'>
        <h1 className='mt-12 text-xl'> please sign up first:</h1>
        <div className='flex flex-col items-stretch gap-y-4'>
          <GithubButton />
          <GoogleButton />
        </div>
      </main>
    );
  }

  return <h1>hello</h1>;
}
