/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/function-component-definition */
import React, { FC, useContext } from 'react';
import { Switcher } from '../components';
import { Context } from '../context';

const SwitcherContainer: FC = () => {
  const context = useContext(Context);

  const clickHandler = (e: React.SyntheticEvent<EventTarget>) => {
    if (e !== null && e.target instanceof HTMLElement) {
      const { value } = e.target.dataset;

      context?.setContext({ ...context, switch: value! });
    }
  };

  return (
    <Switcher>
      <Switcher.Button
        data-value="All"
        className={context?.switch === 'All' ? 'active' : undefined}
        onClick={(e) => clickHandler(e)}
      >
        All
      </Switcher.Button>
      <Switcher.Button
        data-value="My faves"
        className={context?.switch === 'My faves' ? 'active' : undefined}
        onClick={(e) => clickHandler(e)}
      >
        My faves
      </Switcher.Button>
    </Switcher>
  );
};

export default SwitcherContainer;
