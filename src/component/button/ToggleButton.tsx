import * as React from "react";
import { Button } from "@material-ui/core";

interface IToggleButtonProps {
  left: string;
  right: string;
  onClick: (value: string) => void;
}

const ToggleButton: React.FunctionComponent<IToggleButtonProps> = ({
  left,
  right,
  onClick
}) => {
  const [onLeft, setOnLeft] = React.useState(true);
  const handleClick = (item: string) => {
    setOnLeft(item === left);
    onClick(item);
  };
  return (
    <div className="toggle-button">
      <Button
        variant={onLeft ? "contained" : "outlined"}
        size="small"
        color="primary"
        onClick={() => handleClick(left)}
      >
        {left}
      </Button>
      <Button
        variant={onLeft ? "outlined" : "contained"}
        size="small"
        color="primary"
        onClick={() => handleClick(right)}
      >
        {right}
      </Button>
    </div>
  );
};

export default ToggleButton;
