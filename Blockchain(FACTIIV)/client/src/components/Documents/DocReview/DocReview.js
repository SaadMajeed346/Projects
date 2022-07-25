import { useQuery } from "@apollo/client";
import React from "react";
import { Card } from "react-bootstrap";
import { getCidReviews } from "../../../queries/queries";

const DEFAULT = 0;
const INIT = 1;
const VERIFIED = 2;
const PENDING = 3;
const REFUTED = 4;

function DocReview(props) {
  const { data, loading, error } = useQuery(getCidReviews, {
    variables: { cid: props.cid },
    pollInterval: 100,
  });

  function checkStatus(status) {
    if (status === DEFAULT) return <span>Default</span>;
    else if (status === INIT)
      return <span className="text-primary2">Initialized</span>;
    else if (status === VERIFIED)
      return <span className="text-success">Verified</span>;
    else if (status === PENDING)
      return <span className="text-warning">Pending</span>;
    else if (status === REFUTED)
      return <span className="text-danger">Refuted</span>;
    else return <span></span>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <DocReview props={props} />;

  return (
    <div>
      <Card.Text className="text-center p-2">
        Document Reviews <br />
        {data.getCidReviews.reviews.map((doc, index) => (
          <>
            <h5 key={index} className="fst-italic">
              Review # {index + 1}
            </h5>
            <b>Date:</b>{" "}
            {new Date(parseInt(doc.split(",")[0]) * 1000).toLocaleString()}
            <br />
            <b>Reviewer Did:</b> {doc.split(",")[1]}
            <br />
            <b>Given Status:</b> {checkStatus(parseInt(doc.split(",")[2]))}
            <br />
          </>
        ))}
      </Card.Text>
    </div>
  );
}

export default DocReview;
