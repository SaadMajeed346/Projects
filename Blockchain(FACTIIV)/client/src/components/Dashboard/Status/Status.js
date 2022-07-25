import React from "react";
import { useQuery } from "@apollo/client";
import { getUserStatus } from "../../../queries/queries";
import { Card } from "react-bootstrap";
import { BsClipboardCheck, BsClipboardData } from "react-icons/bs";

function Status(props) {
  const { data, loading, error } = useQuery(getUserStatus, {
    variables: { did: props.obj.did },
    pollInterval: 100,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <Status props={props} />;
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="pb-4">
            Documents Uploaded <BsClipboardData className="float-end" />
          </Card.Title>
          <Card.Text className="text-primary fst-italic fw-bold">
            Total Documents Uploaded:{" "}
            {Object.values(data.getUserStatus.status)[0]}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title className="pb-4">
            Documents Status <BsClipboardCheck className="float-end" />
          </Card.Title>
          <Card.Text className="text-success fw-bold fst-italic">
            Verified: {Object.values(data.getUserStatus.status)[1]}
          </Card.Text>
          <Card.Text className="text-warning fw-bold fst-italic">
            Pending: {Object.values(data.getUserStatus.status)[2]}
          </Card.Text>
          <Card.Text className="text-danger fw-bold fst-italic">
            Rejected: {Object.values(data.getUserStatus.status)[3]}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Status;
