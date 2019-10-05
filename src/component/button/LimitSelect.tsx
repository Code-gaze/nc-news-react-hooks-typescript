import * as React from "react";

interface ILimitSelectProps {
  limit: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LimitSelect: React.FunctionComponent<ILimitSelectProps> = ({
  limit,
  onChange
}) => {
  let list = [];
  for (let i = 2; i <= 12; i += 2) {
    list.push(i);
  }
  return (
    <div className="sort">
      <label>Show how many articles per page:</label>
      <select value={limit} onChange={onChange}>
        {list.map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};
export default LimitSelect;
