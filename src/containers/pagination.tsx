/* eslint-disable no-nested-ternary */
import React, { FC, useContext } from 'react';
import { Pagination } from '../components';
import { Context } from '../context';
import { MAX_PAGES } from '../constants';

const PaginationContainer: FC = () => {
  const context = useContext(Context);

  const leftClickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (
      e !== null &&
      e.target instanceof HTMLElement &&
      context &&
      e.target.dataset.value
    ) {
      const { value } = e.target.dataset;
      const newPage = +value === 0 ? MAX_PAGES : +value;
      const arr = context.pagesInit;

      if (context.pagesInit.indexOf(context.page) === 0) {
        arr.splice(-1, 1);

        if (+value === 0) {
          arr.unshift(MAX_PAGES.toString());
        } else {
          arr.unshift((+context.pagesInit[0] - 1).toString());
        }
        context.setContext({ ...context, pagesInit: arr });
      }
      context.setContext({ ...context, page: newPage.toString() });
    }
  };

  const rightClickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (
      e !== null &&
      e.target instanceof HTMLElement &&
      context &&
      e.target.dataset.value
    ) {
      const { value } = e.target.dataset;
      const newPage = +value > MAX_PAGES ? 1 : +value;
      const arr = context.pagesInit;

      if (
        context.pagesInit.indexOf(context.page) ===
        context.pagesInit.length - 1
      ) {
        arr.splice(0, 1);

        if (+value === MAX_PAGES + 1) {
          arr.push('1');
        } else {
          arr.push(
            (+context.pagesInit[context.pagesInit.length - 1] + 1).toString()
          );
        }

        context.setContext({ ...context, pagesInit: arr });
      }
      context.setContext({ ...context, page: newPage.toString() });
    }
  };

  const clickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (
      e !== null &&
      e.target instanceof HTMLElement &&
      context &&
      e.target.dataset.value
    ) {
      const { value } = e.target.dataset;
      const newPage =
        +value > MAX_PAGES ? 1 : +value === 0 ? MAX_PAGES : +value;

      context.setContext({ ...context, page: newPage.toString() });
    }
  };

  return context ? (
    <Pagination>
      <Pagination.Button
        data-value={+context.page - 1}
        onClick={(e) => leftClickHandler(e)}
      >
        {'<'}
      </Pagination.Button>
      {context.pagesInit.map((item, index) => (
        <Pagination.Button
          data-value={item}
          key={index}
          className={context.page === item ? 'active' : undefined}
          onClick={(e) => clickHandler(e)}
        >
          {item}
        </Pagination.Button>
      ))}
      <Pagination.Button
        data-value={+context.page + 1}
        onClick={(e) => rightClickHandler(e)}
      >
        {'>'}
      </Pagination.Button>
    </Pagination>
  ) : null;
};

export default PaginationContainer;
