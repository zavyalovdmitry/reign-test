import { createContext, Dispatch, SetStateAction } from 'react';

export interface IContext {
  switch: string;
  filter: string;
  page: string;
  setContext: Dispatch<SetStateAction<IContext>>;
}

export const Context = createContext<IContext | null>(null);
