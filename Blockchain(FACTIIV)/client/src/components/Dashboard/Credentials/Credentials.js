import React from "react";
import { Card } from "react-bootstrap";

function Credentials(props) {
  return (
    <>
      <Card.Text>
        <b>Name: </b>
        {props.obj.name !== undefined && props.obj.name.length !== 0 ? (
          <>{props.obj.name}</>
        ) : (
          <>N/A</>
        )}{" "}
      </Card.Text>
      <Card.Text>
        <b>E-Mail: </b>
        {props.obj.email !== undefined && props.obj.email.length !== 0 ? (
          <>{props.obj.email}</>
        ) : (
          <>N/A</>
        )}
      </Card.Text>
      <Card.Text>
        <b>Country: </b>
        {props.obj.country !== undefined && props.obj.country.length !== 0 ? (
          <>{props.obj.country}</>
        ) : (
          <>N/A</>
        )}
      </Card.Text>
      <Card.Text>
        <b>Phone: </b>
        {props.obj.phone !== undefined && props.obj.phone.length !== 0 ? (
          <>{props.obj.phone}</>
        ) : (
          <>N/A</>
        )}
      </Card.Text>
      <Card.Text className="fw-light fst-italic pt-4">
        <>{props.obj.did}</>
      </Card.Text>
    </>
  );
}

export default Credentials;
