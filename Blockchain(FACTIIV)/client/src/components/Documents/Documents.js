import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  getNetworkCids,
  getUserCids,
  refuteCid,
  verifyCid,
} from "../../queries/queries";
import DocReview from "./DocReview/DocReview";
import DocStatus from "./DocStatus/DocStatus";

function Documents(props) {
  const { data, loading, error } = useQuery(getUserCids, {
    variables: { did: props.obj.did },
    pollInterval: 100,
  });
  const {
    data: _data,
    loading: _loading,
    error: _error,
  } = useQuery(getNetworkCids, {
    pollInterval: 100,
  });

  const [verify_, { loading: vLoading, error: vError }] = useMutation(
    verifyCid,
    {
      pollInterval: 100,
    }
  );
  const [refute_, { loading: rLoading, error: rError }] = useMutation(
    refuteCid,
    {
      pollInterval: 100,
    }
  );

  function verify(did, cid, index) {
    document.getElementsByClassName("V").item(index).disabled = true;
    document.getElementsByClassName("R").item(index).disabled = true;
    verify_({
      variables: {
        did: did,
        cid: cid,
      },
    });
  }

  function refute(did, cid, index) {
    document.getElementsByClassName("V").item(index).disabled = true;
    document.getElementsByClassName("R").item(index).disabled = true;
    refute_({
      variables: {
        did: did,
        cid: cid,
      },
    });
  }

  if (loading || _loading) return <p>Loading...</p>;
  if (error || _error) return <Documents props={props} />;

  return (
    <div>
      <h1 className="text-center display-6 m-4">
        <span className="text-primary fw-bold fst-italic">
          {props.obj.name}{" "}
        </span>
        uploaded documents
      </h1>
      <Container fluid>
        {data.getUserCids.cids.map((doc, index) => (
          <Row key={index} className="my-3 mx-auto w-75">
            <Col>
              <Card className="p-3">
                <DocStatus did={props.obj.did} cid={doc} />
                <DocReview cid={doc} />
                <Card.Header className="text-center h4 fw-lighter">
                  <i>
                    <b>CID : </b>
                  </i>
                  <a
                    href={`https://${doc}.ipfs.dweb.link`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>{doc}</i>
                  </a>
                </Card.Header>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
      <h1 className="text-center display-6 m-4">
        Network's Uploaded Documents
      </h1>
      <Container fluid>
        {_data.getNetworkCids.networkCids.map((doc, index) => (
          <div key={index}>
            {doc.split(",")[0] !== props.obj.did && (
              <Row className="my-3 mx-auto w-75">
                <Col>
                  <Card className="p-3">
                    <DocStatus
                      did={props.obj.did}
                      cid={doc.split(",")[1]}
                      index={index}
                    />
                    <Card.Header className="text-center h4 fw-lighter">
                      <i>
                        <b>DID : {doc.split(",")[0]} </b>
                      </i>
                      <br />
                      <i>
                        <b>CID : </b>
                      </i>
                      <a
                        href={`https://${doc.split(",")[1]}.ipfs.dweb.link`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i>{doc.split(",")[1]}</i>
                      </a>
                    </Card.Header>
                    <Card.Text>
                      <Button
                        className="V btn-success w-50"
                        onClick={() => {
                          verify(props.obj.did, doc.split(",")[1], index);
                        }}
                      >
                        Verify
                      </Button>
                      <Button
                        className="R btn-danger w-50"
                        onClick={() => {
                          refute(props.obj.did, doc.split(",")[1], index);
                        }}
                      >
                        Refute
                      </Button>
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Documents;
