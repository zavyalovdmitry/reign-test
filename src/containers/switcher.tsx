/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { Switcher } from '../components';

const SwitcherContainer: FC = () => (
  <Switcher>
    <Switcher.Button className="active">All</Switcher.Button>
    <Switcher.Button>My faves</Switcher.Button>
  </Switcher>
);

export default SwitcherContainer;
