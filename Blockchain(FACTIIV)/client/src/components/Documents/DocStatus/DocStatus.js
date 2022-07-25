import { useQuery } from "@apollo/client";
import React from "react";
import { Card } from "react-bootstrap";
import { getCidReviews, getCidStatus } from "../../../queries/queries";

const DEFAULT = 0;
const INIT = 1;
const VERIFIED = 2;
const PENDING = 3;
const REFUTED = 4;

function DocStatus(props) {
  const { data, loading, error } = useQuery(getCidStatus, {
    variables: { cid: props.cid },
    pollInterval: 100,
  });
  const {
    data: _data,
    loading: _loading,
    error: _error,
  } = useQuery(getCidReviews, {
    variables: { cid: props.cid },
    pollInterval: 100,
  });

  function isReviewed(index, did) {
    let flag = false;
    _data.getCidReviews.reviews.map((doc, _) => {
      if (doc.split(",")[1] === did) flag = true;
    });

    if (flag)
      setTimeout(() => {
        document.getElementsByClassName("V").item(index).disabled = true;
        document.getElementsByClassName("R").item(index).disabled = true;
      }, 0);
  }

  function hideBtn(index) {
    setTimeout(() => {
      document.getElementsByClassName("V").item(index).hidden = true;
      document.getElementsByClassName("R").item(index).hidden = true;
    }, 0);
  }

  function checkStatus(status) {
    if (status === VERIFIED || status === REFUTED) hideBtn(props.index);
    else isReviewed(props.index, props.did);

    if (status === DEFAULT)
      return <span className="fst-italic h5 p-2">Default</span>;
    else if (status === INIT)
      return (
        <span className="fst-italic text-primary h5 p-2">Initialized</span>
      );
    else if (status === VERIFIED)
      return <span className="fst-italic text-success h5 p-2">Verified</span>;
    else if (status === PENDING)
      return <span className="fst-italic text-warning h5 p-2">Pending</span>;
    else if (status === REFUTED)
      return <span className="fst-italic text-danger h5 p-2">Refuted</span>;
    else return <span></span>;
  }

  if (loading || _loading) return <p>Loading...</p>;
  if (error || _error) return <DocStatus props={props} />;

  return (
    <div>
      <Card.Text className="text-center">
        Document Status: {checkStatus(data.getCidStatus.cidStatus)}
      </Card.Text>
    </div>
  );
}

export default DocStatus;
