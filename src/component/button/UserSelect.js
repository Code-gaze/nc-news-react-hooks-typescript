import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

const UserSelect = ({ currentUser, handleChange }) => {
 return (
  <Select value={currentUser} autoWidth={true} onChange={handleChange}
  >
   <MenuItem value="jessjelly">jessjelly</MenuItem>
   <MenuItem value="tickle122">tickle122</MenuItem>
   <MenuItem value="grumpy19">grumpy19</MenuItem>
   <MenuItem value="happyamy2016">happyamy2016</MenuItem>
   <MenuItem value="cooljmessy">cooljmessy</MenuItem>
   <MenuItem value="weegembump">weegembump</MenuItem>
  </Select>
 );
};

export default UserSelect;