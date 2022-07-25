const ethers = require("ethers");
require("dotenv").config();
// const ContractAddress = "0x5468b270951b2e00A4fD49995836D75C92C99e3a"; OLD
// const ContractAddress = "0xa4545709DB85E808916b43B398B1330debF093eC"; OLD
const ContractAddress = "0xdaE1Fa4A87eDDB4a991E6ce435Ea8A7Ea395c91d";
let wallet = new ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
let provider = new ethers.providers.InfuraProvider(
  "rinkeby",
  process.env.INFURA_API
);
wallet = wallet.connect(provider);
let ABI = [
  "function addUser(string memory did) external",
  "function addUserCid(string memory did, string memory cid) external",
  "function getUserScore(string memory did) external view returns (uint16)",
  "function getUserCids(string memory did) external view returns (string[] memory)",
  "function getNetworkCids() external view returns ((string, string)[] memory)",
  "function getUserStatus(string memory did) external view returns (uint256, uint256, uint256, uint256)",
  "function getCidStatus(string memory cid) external view returns (uint256)",
  "function verifyCid(string memory did, string memory cid) external",
  "function refuteCid(string memory did, string memory cid) external",
  "function getCidReviews(string memory cid) external view returns ((uint256, string, uint8)[] memory)",
];
let token = new ethers.Contract(ContractAddress, ABI, wallet);

const addNewUser = async (did) => {
  let txHash = await token.addUser(did, { gasLimit: 1000000 });
  txHash.wait();
};

const addUserCID = async (did, cid) => {
  let txHash = await token.addUserCid(did, cid);
  txHash.wait();
};

const getUserScore = async (did) => {
  return await token.getUserScore(did);
};

const getUserCids = async (did) => {
  return await token.getUserCids(did);
};

const getNetworkCids = async () => {
  return await token.getNetworkCids();
};

const getUserStatus = async (did) => {
  return await token.getUserStatus(did);
};

const getCidStatus = async (cid) => {
  return await token.getCidStatus(cid);
};

const getCidReviews = async (cid) => {
  return await token.getCidReviews(cid);
};

const verifyCid = async (did, cid) => {
  let txHash = await token.verifyCid(did, cid);
  txHash.wait();
};

const refuteCid = async (did, cid) => {
  let txHash = await token.refuteCid(did, cid);
  txHash.wait();
};

const sendBonus = async (receiverAddress, amountInEther) => {
  wallet.sendTransaction({
    to: receiverAddress,
    value: ethers.utils.parseEther(amountInEther.toString()),
  });
};

module.exports = {
  addNewUser,
  addUserCID,
  getUserScore,
  getUserCids,
  getNetworkCids,
  getUserStatus,
  getCidStatus,
  verifyCid,
  refuteCid,
  getCidReviews,
  sendBonus,
};
