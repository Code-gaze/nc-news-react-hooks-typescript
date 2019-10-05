import * as React from "react";
import { Button } from "@material-ui/core";
import { IArticle } from "../types";

interface IVoteProps {
  votes: number;
  id: number;
  handleVote: (id: number, body: { inc_votes: number }) => Promise<IArticle>;
}

const Vote: React.FunctionComponent<IVoteProps> = ({
  votes,
  id,
  handleVote
}) => {
  const [vote, setVote] = React.useState(0);
  const updateVote = (change: number) => {
    setVote(vote + change);
    handleVote(id, { inc_votes: change }).catch(error =>
      setVote(vote - change)
    );
  };
  return (
    <div className="vote-block">
      <div className="vote">
        <Button
          variant="outlined"
          size="small"
          color="primary"
          disabled={vote > 0}
          onClick={() => updateVote(1)}
        >
          + vote!
        </Button>
      </div>
      <p>Votes: {votes + vote}</p>
      <div className="vote">
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          disabled={vote < 0}
          onClick={() => updateVote(-1)}
        >
          - vote!
        </Button>
      </div>
    </div>
  );
};

export default Vote;
