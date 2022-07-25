import { gql } from "@apollo/client";

// Query bridge of data between front end / back end
const addUserMutation = gql`
  mutation ($did: String!, $Rdid: String!) {
    addUser(did: $did, Rdid: $Rdid) {
      did
    }
  }
`;

const updateDocument = gql`
  mutation ($did: String!, $upload: Int!) {
    updateUser(did: $did, upload: $upload) {
      did
      upload
    }
  }
`;

const getUserScore = gql`
  query ($did: String!) {
    getUserScore(did: $did) {
      score
    }
  }
`;

const getUserCids = gql`
  query ($did: String!) {
    getUserCids(did: $did) {
      cids
    }
  }
`;

const getNetworkCids = gql`
  query {
    getNetworkCids {
      networkCids
    }
  }
`;

const getUserStatus = gql`
  query ($did: String!) {
    getUserStatus(did: $did) {
      status
    }
  }
`;

const getCidStatus = gql`
  query ($cid: String!) {
    getCidStatus(cid: $cid) {
      cidStatus
    }
  }
`;

const getCidReviews = gql`
  query ($cid: String!) {
    getCidReviews(cid: $cid) {
      reviews
    }
  }
`;

const getUserDocument = gql`
  query ($did: String!) {
    getUserDocument(did: $did) {
      upload
    }
  }
`;

const getReferals = gql`
  query ($did: String!) {
    getReferals(did: $did) {
      referals
    }
  }
`;

const verifyCid = gql`
  mutation ($did: String!, $cid: String!) {
    verifyCid(did: $did, cid: $cid)
  }
`;

const refuteCid = gql`
  mutation ($did: String!, $cid: String!) {
    refuteCid(did: $did, cid: $cid)
  }
`;

const sendETHBonus = gql`
  mutation ($did: String!, $address: String!, $claims: Int!) {
    sendETHBonus(did: $did, address: $address, claims: $claims)
  }
`;

export {
  addUserMutation,
  updateDocument,
  getUserScore,
  getUserCids,
  getNetworkCids,
  getUserStatus,
  getCidStatus,
  getCidReviews,
  getUserDocument,
  getReferals,
  verifyCid,
  refuteCid,
  sendETHBonus,
};
