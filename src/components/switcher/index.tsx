/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { Container, Button } from './styles/switcher';

interface SwitcherComposition {
  Button: FC;
}

const Switcher: FC & SwitcherComposition = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

const SwitcherButton: FC = ({ children, ...restProps }) => (
  <Button {...restProps}>{children}</Button>
);

Switcher.Button = SwitcherButton;

export default Switcher;
