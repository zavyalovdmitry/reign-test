import React, { FC, useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { Filter } from '../components';
import { Context } from '../context';
import { SELECT_OPTIONS, SELECT_STYLES, PAGES } from '../constants';

const FilterContainer: FC = () => {
  const context = useContext(Context);
  const [filterValue, setFilterValue] = useState<undefined | string | null>(
    undefined
  );

  const clickHandler = (e: string) => {
    if (e !== null && context) {
      context.setContext({
        ...context,
        filter: e,
        page: '1',
        pagesInit: [...PAGES],
      });

      setFilterValue(e);
      localStorage.setItem('filter', e);
    }
  };

  useEffect(() => {
    if (context) {
      if (localStorage.getItem('filter')) {
        setFilterValue(localStorage.getItem('filter')!);
        context.setContext({
          ...context,
          filter: localStorage.getItem('filter'),
        });
      } else {
        setFilterValue(context.filter);
        localStorage.setItem('filter', '');
      }
    }
  }, []);

  return filterValue !== undefined && context && context.switch === 'All' ? (
    <Filter>
      <Select
        styles={SELECT_STYLES}
        placeholder={filterValue || 'Select your news'}
        onChange={(e: any) => clickHandler(e.value)}
        options={SELECT_OPTIONS as unknown as readonly string[]}
        isSearchable={false}
      />
    </Filter>
  ) : null;
};

export default FilterContainer;
