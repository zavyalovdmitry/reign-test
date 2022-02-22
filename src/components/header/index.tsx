/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { Container, Title } from './styles/header';

interface HeaderComposition {
  Title: FC;
}

const Header: FC & HeaderComposition = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

const HeaderTitle: FC = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Header.Title = HeaderTitle;

export default Header;
