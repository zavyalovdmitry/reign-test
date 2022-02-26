/* eslint-disable react/jsx-no-constructed-context-values */
import React, { FC, useState } from 'react';
import Home from './pages/home';
import { IContext, Context } from './context';
import { PAGES } from './constants';

const App: FC = () => {
  const initialContext: IContext = {
    switch: 'All',
    filter: '',
    page: '1',
    pagesInit: [...PAGES],
    setContext: (): void => {
      throw new Error('error');
    },
  };

  const [context, setContext] = useState<IContext>(initialContext);

  return (
    <Context.Provider value={{ ...context, setContext }}>
      <Home />
    </Context.Provider>
  );
};

export default App;
