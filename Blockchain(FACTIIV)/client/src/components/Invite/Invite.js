import React from "react";
import { Container } from "react-bootstrap";

function Invite(props) {
  var factiivLink = "http://localhost:3000/";

  return (
    <Container className="text-center">
      <h1 className="display-6 m-4">Invite QR</h1>
      <img
        className="w-25"
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${factiivLink}${props.obj.did}`}
        alt="Invite link QR Code"
      ></img>
      <p className="pt-3 fst-italic h4">
        Share this QR code and earn
        <span className="text-secondary"> bonus!</span>
      </p>
      <p>
        You can use this link to scan QR online <br />
        <a href="https://webqr.com/index.html" target="_blank" rel="noreferrer">
          https://webqr.com/index.html
        </a>
      </p>
    </Container>
  );
}

export default Invite;
