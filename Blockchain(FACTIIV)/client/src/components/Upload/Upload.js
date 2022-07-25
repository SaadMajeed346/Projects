import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useMutation, useQuery } from "@apollo/client";
import { getUserDocument, updateDocument } from "../../queries/queries";

function Upload(props) {
  const [file, setfile] = useState(null);
  const [fileKey, setfileKey] = useState(Date.now());
  const [updateDoc, { _loading, _error }] = useMutation(updateDocument);
  const { data, loading, error } = useQuery(getUserDocument, {
    variables: { did: props.obj.did },
    pollInterval: 100,
  });

  function onChangeHandler(event) {
    setfile(event.target.files[0]);
  }

  function onClickHandler() {
    if (file != null) {
      if (data.getUserDocument.upload > 0) {
        NotificationManager.info(
          "Please wait while your document is being uploaded!",
          "Uploading",
          6000
        );
        const formData = new FormData();
        formData.append(
          "file",
          file,
          `${props.obj.did}.` + file.name.split(".").pop()
        );
        axios.post("http://localhost:4000/upload", formData);
        setfileKey(Date.now());
        setfile(null);
        let count = parseInt(data.getUserDocument.upload - 1);
        updateDoc({
          variables: {
            did: props.obj.did,
            upload: count,
          },
        });
      } else {
        if (!(data.getUserDocument.upload > 0))
          NotificationManager.warning(
            "Please activate a package first!",
            "Upload denied",
            3000
          );
        else
          NotificationManager.warning(
            "Please enter proposed score!",
            "Upload denied",
            3000
          );
      }
    } else
      NotificationManager.warning(
        "Please upload a file!",
        "Upload denied",
        3000
      );
  }

  useEffect(() => {
    NotificationManager.listNotify.forEach((n) =>
      NotificationManager.remove({ id: n.id })
    );
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <Upload props={props} />;

  return (
    <Container className="w-50 align-items-center text-center">
      <h1 className="text-center display-6 m-4">Upload Credit Document</h1>
      <input
        key={fileKey}
        className="p-5 mb-4 mt-5 form-control form-control-lg"
        type="file"
        onChange={onChangeHandler}
      />
      <Button size="lg" onClick={onClickHandler}>
        Upload
      </Button>
      <NotificationContainer />
    </Container>
  );
}

export default Upload;
