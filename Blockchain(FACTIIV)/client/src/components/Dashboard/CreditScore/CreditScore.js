import React from "react";
import ReactStoreIndicator from "react-score-indicator";
import { Box } from "./Styled";
import { useQuery } from "@apollo/client";
import { getUserScore } from "../../../queries/queries";

function CreditScore(props) {
  const { data, loading, error } = useQuery(getUserScore, {
    variables: { did: props.obj.did },
    pollInterval: 100,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <CreditScore props={props} />;
  return (
    <div>
      <Box>
        <ReactStoreIndicator
          value={data.getUserScore.score}
          maxValue={850}
          lineWidth={15}
          lineGap={0}
        />
      </Box>
    </div>
  );
}

export default CreditScore;
