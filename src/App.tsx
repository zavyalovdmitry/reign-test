/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import React, { FC, useState } from 'react';
import Home from './pages/home';
import { IContext, Context } from './context';

const App: FC = () => {
  const initialContext: IContext = {
    switch: 'All',
    filter: '',
    page: '1',
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
