/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/function-component-definition */
import React, { FC, useContext, useEffect, useState } from 'react';
import { Filter } from '../components';
import { Context } from '../context';

const data = ['Angular', 'Reactjs', 'Vuejs'];

const FilterContainer: FC = () => {
  const context = useContext(Context);
  const [filterValue, setFilterValue] = useState<undefined | string>(undefined);

  const clickHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e !== null && e.currentTarget instanceof HTMLElement) {
      const { value } = e.currentTarget;

      context?.setContext({ ...context, filter: value });
      setFilterValue(value);

      localStorage.setItem('filter', value);
    }
  };

  useEffect(() => {
    !localStorage.getItem('filter') ? (
        setFilterValue(context?.filter),
        localStorage.setItem('filter', '')
    ) : (
        setFilterValue(localStorage.getItem('filter')!),
        context?.setContext({
          ...context, filter: localStorage.getItem('filter')!
        })
    );
  }, []);

  return filterValue !== undefined? (
    <Filter>
      <Filter.Select
        id="news"
        defaultValue={filterValue || 'Select your news'}
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
  ) : null;
};

export default FilterContainer;
