/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { Pagination } from '../components';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PaginationContainer: FC = () => (
  <Pagination>
    <Pagination.Button className="active">{'<'}</Pagination.Button>
    {pages.map((item, index) => (
      <Pagination.Button key={index}>{item}</Pagination.Button>
    ))}
    <Pagination.Button className="active">{'>'}</Pagination.Button>
  </Pagination>
);

export default PaginationContainer;
