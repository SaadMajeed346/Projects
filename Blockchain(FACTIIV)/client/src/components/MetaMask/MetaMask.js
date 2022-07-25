import React, { useState, useEffect } from "react";
import "react-notifications/lib/notifications.css";
import { Button, Container } from "react-bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { ethers } from "ethers";
import Packages from "../Packages/Packages";
import { useMutation, useQuery } from "@apollo/client";
import {
  getReferals,
  getUserDocument,
  sendETHBonus,
  updateDocument,
} from "../../queries/queries";

const provider = new ethers.providers.Web3Provider(window.ethereum);

function MetaMask(props) {
  const { data, loading, error } = useQuery(getUserDocument, {
    variables: { did: props.obj.did },
    pollInterval: 100,
  });
  const {
    data: data_,
    loading: loading_,
    error: error_,
  } = useQuery(getReferals, {
    variables: { did: props.obj.did },
    pollInterval: 100,
  });
  const [updateDoc, { _loading, _error }] = useMutation(updateDocument);
  const [sendETH, { loading: ETHloading, error: ETHerror }] =
    useMutation(sendETHBonus);
  const [currentAccount, setcurrentAccount] = useState(null);
  const [isShowConnect, setisShowConnect] = useState(true);
  const [isShowBuy, setisShowBuy] = useState(false);

  function manipulationPenalty() {
    NotificationManager.error(
      "Sorry, package not activated due to manipulation",
      "Manipulation Penalty!",
      5000
    );
  }

  function connectionError(_) {
    NotificationManager.warning(
      "Please connect to MetaMask! (Use Button/Extension)",
      "Metamask",
      3000
    );
  }

  function packageActivate(val) {
    updateDoc({
      variables: {
        did: props.obj.did,
        upload: val,
      },
    });
  }

  function packageCheck(result) {
    let val = result["value"] + "";
    if (val === "100000000000000000") {
      NotificationManager.success(
        "Congratulations!",
        "Gold package activated",
        3000
      );
      packageActivate(30);
    } else if (val === "80000000000000000") {
      NotificationManager.success(
        "Congratulations!",
        "Platinum package activated",
        3000
      );
      packageActivate(20);
    } else if (val === "50000000000000000") {
      NotificationManager.success(
        "Congratulations!",
        "Silver package activated",
        3000
      );
      packageActivate(10);
    } else {
      manipulationPenalty();
    }
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      connectionError();
    } else if (accounts[0] !== currentAccount) {
      NotificationManager.info("Connection successful!", "Metamask", 2000);
      setcurrentAccount(accounts[0]);
      setisShowConnect(false);
      setisShowBuy(true);
      if (data_.getReferals.referals > 0) {
        NotificationManager.success(
          "Referal bonuses being claimed, please wait...",
          "Bonus Reward!",
          4000
        );
        sendETH({
          variables: {
            did: props.obj.did,
            address: props.obj.did,
            claims: data_.getReferals.referals,
          },
        });
      }
    }
  }

  function connect() {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(handleAccountsChanged)
      .catch(connectionError);
  }

  function receiptCheck(hash) {
    provider.getTransactionReceipt(hash).then((receipt) => {
      if (receipt !== null) {
        if (receipt["to"] === "0xE76A520faaDA8cF07Ae1325af336b54675B75893") {
          provider
            .getTransaction(hash)
            .then(packageCheck)
            .catch((err) => {
              console.error(err);
            });
        } else {
          manipulationPenalty();
        }
      } else {
        window.setTimeout(function () {
          receiptCheck(hash);
        }, 3000);
      }
    });
  }

  async function send(val) {
    await window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: "0xE76A520faaDA8cF07Ae1325af336b54675B75893",
            value: val,
          },
        ],
      })
      .then((res) => {
        NotificationManager.info(
          "Please wait while your transaction is being processed",
          "Metamask",
          8000
        );
        receiptCheck(res);
      })
      .catch(() => {
        NotificationManager.warning(
          "Please confirm transaction!",
          "Metamask",
          3000
        );
      });
  }

  useEffect(() => {
    NotificationManager.listNotify.forEach((n) =>
      NotificationManager.remove({ id: n.id })
    );
    connect();
  }, []);

  if (loading || loading_) return <p>Loading...</p>;
  if (error || error_) return <MetaMask props={props} />;
  return (
    <Container className="text-center">
      {data.getUserDocument.upload === 0 && (
        <>
          <h1 className="text-center display-6 m-4">
            Choose your package plan
          </h1>
          {isShowConnect && (
            <Button variant="primary" onClick={connect}>
              Connect with Metamask
            </Button>
          )}

          <Packages send={send} isShowBuy={isShowBuy} />
        </>
      )}
      {data.getUserDocument.upload !== 0 && (
        <>
          <h1 className="text-center display-3 m-5 text-success fw-bold fst-italic">
            Package Already Activated !
          </h1>
          <p className="text-center display-6 m-5">
            Document upload limit : {data.getUserDocument.upload}
          </p>
        </>
      )}
      <NotificationContainer />
    </Container>
  );
}

export default MetaMask;
