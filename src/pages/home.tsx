/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import {
  HeaderContainer,
  SwitcherContainer,
  FilterContainer,
  NewsContainer,
} from '../containers';

const Home: FC = () => (
  <>
    <HeaderContainer />
    <SwitcherContainer />
    <FilterContainer />
    <NewsContainer />
  </>
);

export default Home;
