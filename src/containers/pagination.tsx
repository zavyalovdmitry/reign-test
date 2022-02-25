/* eslint-disable react/function-component-definition */
import React, { FC, useContext } from 'react';
import { Pagination } from '../components';
import { Context } from '../context';

const pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const PaginationContainer: FC = () => {
  const context = useContext(Context);

  const clickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (e !== null && e.target instanceof HTMLElement) {
      const { value } = e.target.dataset;

      context?.setContext({ ...context, page: value! });
    }
  };

  return (
    <Pagination>
      <Pagination.Button data-value="<" onClick={(e) => clickHandler(e)}>
        {'<'}
      </Pagination.Button>
      {pages.map((item, index) => (
        <Pagination.Button
          data-value={item}
          key={index}
          className={context!.page === item ? 'active' : undefined}
          onClick={(e) => clickHandler(e)}
        >
          {item}
        </Pagination.Button>
      ))}
      <Pagination.Button data-value=">" onClick={(e) => clickHandler(e)}>
        {'>'}
      </Pagination.Button>
    </Pagination>
  );
};

export default PaginationContainer;
