import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { LogoutButton } from './Buttons';
import { authOptions } from '~/lib/auth';

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className='bg-gray-100 shadow-md backdrop-blur-md'>
      <div className='container mx-auto flex items-center justify-between py-3'>
        <div className='flex items-center gap-x-2'>
          <Image
            src={session?.user?.image ?? './user.svg'}
            width={40}
            height={40}
            alt='user profile'
            className='rounded-full'
          />
          <p className='text-lg font-semibold'>{session?.user?.name}</p>
        </div>
        <LogoutButton />
      </div>
    </nav>
  );
}
export default Navbar;
