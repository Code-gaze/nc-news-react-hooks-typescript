import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

const SortSelect = ({ onChange, sortValue, options }) => {
 return (
  <div className="sort">
   <label>SORT BY:</label>
   <Select value={sortValue} autoWidth={true} onChange={onChange}>
    {options && options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
   </Select>
  </div>
 );
};

export default SortSelect;
