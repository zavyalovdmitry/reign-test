import { createContext, Dispatch, SetStateAction } from 'react';

export interface IContext {
  switch: string | undefined;
  filter: string | null;
  page: string;
  pagesInit: string[];
  setContext: Dispatch<SetStateAction<IContext>>;
}

export const Context = createContext<IContext | null>(null);
