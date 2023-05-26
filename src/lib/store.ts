import { atom } from 'jotai';

type Post = {
  title: string;
  body: string;
};

export const modalAtom = atom(false);

export const postAtom = atom<Post>({
  title: '',
  body: '',
});
