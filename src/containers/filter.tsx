/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { Filter } from '../components';
// import logo from '../angular.svg';

const data = ['Angular', 'Reactjs', 'Vuejs'];

const FilterContainer: FC = () => (
  <Filter>
    <Filter.Select id="news" defaultValue="Select your news">
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

export default FilterContainer;
