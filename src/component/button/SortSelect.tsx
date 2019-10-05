import * as React from "react";
import { Select, MenuItem } from "@material-ui/core";

interface ISortSelectProps {
  options: string[];
  sortValue: string | unknown;
  onChange: (
    event: React.ChangeEvent<{
      value: unknown | string;
    }>
  ) => void;
}

const SortSelect: React.FunctionComponent<ISortSelectProps> = ({
  onChange,
  sortValue,
  options
}) => {
  return (
    <div className="sort">
      <label>SORT BY:</label>
      <Select value={sortValue} autoWidth={true} onChange={onChange}>
        {options &&
          options.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

export default SortSelect;
