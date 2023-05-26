'use client';
import { ReactNode } from 'react';
import { Provider } from 'jotai';

interface Props {
  children: ReactNode;
}

function JotaiProvider({ children }: Props) {
  return <Provider>{children}</Provider>;
}
export default JotaiProvider;
