/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import {
  HeaderContainer,
  SwitcherContainer,
  FilterContainer,
  NewsContainer,
  PaginationContainer,
} from '../containers';

const Home: FC = () => (
  <>
    <HeaderContainer />
    <SwitcherContainer />
    <FilterContainer />
    <NewsContainer />
    <PaginationContainer />
  </>
);

export default Home;
