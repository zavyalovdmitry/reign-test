/* eslint-disable react/function-component-definition */
import React, { FC, useContext } from 'react';
import { Filter } from '../components';
import { Context } from '../context';

const data = ['Angular', 'Reactjs', 'Vuejs'];

const FilterContainer: FC = () => {
  const context = useContext(Context);

  const clickHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e !== null && e.currentTarget instanceof HTMLElement) {
      const { value } = e.currentTarget;

      context?.setContext({ ...context, filter: value });
      console.log(context);
    }
    // console.log(context);
  };

  return (
    <Filter>
      <Filter.Select
        id="news"
        defaultValue="Select your news"
        onChange={(e) => clickHandler(e)}
      >
        <option value="Select your news" disabled hidden>
          Select your news
        </option>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Filter.Select>
    </Filter>
  );
};

export default FilterContainer;
