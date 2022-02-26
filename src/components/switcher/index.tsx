import React from 'react';
import { Container, Button } from './styles/switcher';

interface ISwitcherButton extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

interface ISwitcher extends React.HTMLAttributes<HTMLDivElement> {
  Select?: ISwitcherButton;
  children: React.ReactNode;
}

const Switcher = ({ children, ...restProps }: ISwitcher) => (
  <Container {...restProps}>{children}</Container>
);

const SwitcherButton = ({ children, ...restProps }: ISwitcherButton) => (
  <Button {...restProps}>{children}</Button>
);

Switcher.Button = SwitcherButton;

export default Switcher;
