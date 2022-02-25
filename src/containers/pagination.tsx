/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/function-component-definition */
import React, { FC, useContext, useState } from 'react';
import { Pagination } from '../components';
import { Context } from '../context';
import { PAGES, MAX_PAGES } from '../constants';

const PaginationContainer: FC = () => {
  const [pages, setPages] = useState(PAGES);
  const context = useContext(Context);

  const leftClickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (e !== null && e.target instanceof HTMLElement) {
      const { value } = e.target.dataset;
      const newPage = +value! === 0 ? MAX_PAGES : +value!;
      const arr = pages;

      if (pages.indexOf(context?.page!) === 0) {
        arr.splice(-1, 1);

        if (+value! === 0) {
          arr.unshift(MAX_PAGES.toString());
        } else {
          arr.unshift((+pages[0] - 1).toString());
        }

        setPages(arr);
      }

      context?.setContext({ ...context, page: newPage!.toString() });
    }
  };

  const rightClickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (e !== null && e.target instanceof HTMLElement) {
      const { value } = e.target.dataset;
      const newPage = +value! > MAX_PAGES ? 1 : +value!;
      const arr = pages;

      if (pages.indexOf(context?.page!) === pages.length - 1) {
        arr.splice(0, 1);

        if (+value! === MAX_PAGES) {
          arr.push('1');
        } else {
          arr.push((+pages[pages.length - 1] + 1).toString());
        }

        setPages(arr);
      }
      context?.setContext({ ...context, page: newPage!.toString() });
    }
  };

  const clickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (e !== null && e.target instanceof HTMLElement) {
      const { value } = e.target.dataset;
      const newPage =
        +value! > MAX_PAGES ? 1 : +value! === 0 ? MAX_PAGES : +value!;

      context?.setContext({ ...context, page: newPage!.toString() });
    }
  };

  return (
    <Pagination>
      <Pagination.Button
        data-value={+context!.page - 1}
        onClick={(e) => leftClickHandler(e)}
      >
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
      <Pagination.Button
        data-value={+context!.page + 1}
        onClick={(e) => rightClickHandler(e)}
      >
        {'>'}
      </Pagination.Button>
    </Pagination>
  );
};

export default PaginationContainer;
