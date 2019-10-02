import * as React from "react";

interface IUserSelectProps {
  user: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserSelect: React.FunctionComponent<IUserSelectProps> = ({
  user,
  handleChange
}) => {
  return (
    <select value={user} onChange={handleChange}>
      <option value="jessjelly">jessjelly</option>
      <option value="tickle122">tickle122</option>
      <option value="grumpy19">grumpy19</option>
      <option value="happyamy2016">happyamy2016</option>
      <option value="cooljmessy">cooljmessy</option>
      <option value="weegembump">weegembump</option>
    </select>
  );
};

export default UserSelect;
