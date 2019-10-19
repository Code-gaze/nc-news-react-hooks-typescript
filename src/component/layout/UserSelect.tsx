import * as React from "react";
import { Select, MenuItem } from '@material-ui/core';

interface IUserSelectProps {
  user: string | unknown;
  handleChange: (event: React.ChangeEvent<{
    value: unknown | string;
  }>) => void;
}

const UserSelect: React.FunctionComponent<IUserSelectProps> = ({
  user,
  handleChange
}) => {
  return (
    <Select value={user} onChange ={handleChange}>
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
