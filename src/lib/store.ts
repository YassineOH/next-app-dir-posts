import { atom } from 'jotai';

type Post = {
  title: string;
  body: string;
  postId: string;
};

export const modalFormAtom = atom(false);
export const modalDeleteAtom = atom(false);

export const updatePostAtom = atom(false);

export const postAtom = atom<Post>({
  title: '',
  body: '',
  postId: '',
});

export const errorAuthAtom = atom('');
