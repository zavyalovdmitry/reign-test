/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container, Button } from './styles/pagination';

interface IPaginationButton extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

interface IPagination extends React.HTMLAttributes<HTMLDivElement> {
  Select?: IPaginationButton;
  children: React.ReactNode;
}

const Pagination = ({ children, ...restProps }: IPagination) => (
  <Container {...restProps}>{children}</Container>
);

const PaginationButton = ({ children, ...restProps }: IPaginationButton) => (
  <Button {...restProps}>{children}</Button>
);

Pagination.Button = PaginationButton;

export default Pagination;
