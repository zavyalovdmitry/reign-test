import React from 'react';
import { Container, Select } from './styles/filter';

interface IFilterSelect extends React.HTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

interface IFilter extends React.HTMLAttributes<HTMLDivElement> {
  Select?: IFilterSelect;
  children: React.ReactNode;
}

const FilterSelect = ({ children, ...restProps }: IFilterSelect) => (
  <Select {...restProps}>{children}</Select>
);

const Filter = ({ children, ...restProps }: IFilter) => (
  <Container {...restProps}>{children}</Container>
);

Filter.Select = FilterSelect;

export default Filter;
