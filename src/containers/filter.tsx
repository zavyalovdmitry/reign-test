/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/function-component-definition */
import React, { FC, useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { Filter } from '../components';
import { Context } from '../context';
import { SELECT_OPTIONS, SELECT_STYLES } from '../constants';
// import { PAGES } from '../constants';

const data = ['Angular', 'Reactjs', 'Vuejs'];

const FilterContainer: FC = () => {
  const context = useContext(Context);
  const [filterValue, setFilterValue] = useState<undefined | string>(undefined);

  // const clickHandler = (e: React.FormEvent<HTMLSelectElement>) => {
  const clickHandler = (e: string) => {
    // if (e !== null && e.currentTarget instanceof HTMLElement) {
    if (e !== null) {
      // const { value } = e!;

      context?.setContext({ ...context, filter: e, page: '1' });
      setFilterValue(e);

      localStorage.setItem('filter', e);
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

  return filterValue !== undefined ? (
    <Filter>
      <Select
        styles={SELECT_STYLES}
        placeholder={filterValue || 'Select your news'}
        onChange={(e: any) => clickHandler(e.value)!}
        options={SELECT_OPTIONS as unknown as readonly string[]}
      />
    </Filter>
  ) : null;
};

export default FilterContainer;
