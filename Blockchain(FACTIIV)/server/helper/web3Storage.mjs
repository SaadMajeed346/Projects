import { config } from "dotenv";
import { Web3Storage, getFilesFromPath } from "web3.storage";

import { addUserCID } from "../chainCalls/calls.js";

config();

const token = process.env.API_TOKEN;
const client = new Web3Storage({ token });

async function storeFilesWeb3Storage(did, fileID) {
  const files = await getFilesFromPath("../server/clientFiles/" + fileID);
  const cid = await client.put(files);

  addUserCID(did, cid);
}

export default { storeFilesWeb3Storage };
