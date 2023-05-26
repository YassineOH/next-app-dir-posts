'use client';

import { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
  children: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
}

function Modal({ children, title, open, onClose }: Props) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='absolute inset-0 flex h-screen w-screen items-center justify-center bg-black/60'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-1/3 rounded-md bg-white p-6 shadow-md'>
                <div className='mb-6 mt-3 flex w-full items-center justify-between'>
                  <Dialog.Title as='h3' className='text-2xl capitalize'>
                    {title}
                  </Dialog.Title>
                  <button
                    className='cursor-pointer text-2xl text-gray-500'
                    onClick={onClose}
                  >
                    x
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
export default Modal;
