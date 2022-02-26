import React from 'react';
import { Container, Title } from './styles/header';

interface IHeaderTitle extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
  Select?: IHeaderTitle;
  children: React.ReactNode;
}

const Header = ({ children, ...restProps }: IHeader) => (
  <Container {...restProps}>{children}</Container>
);

const HeaderTitle = ({ children, ...restProps }: IHeaderTitle) => (
  <Title {...restProps}>{children}</Title>
);

Header.Title = HeaderTitle;

export default Header;
