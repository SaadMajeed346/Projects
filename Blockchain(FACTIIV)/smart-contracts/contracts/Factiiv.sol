// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Factiiv {
    enum Status {
        DEFAULT,
        INIT,
        VERIFIED,
        PENDING,
        REFUTED
    }

    struct User {
        // (bool exist purpose)
        // As we need to check if User struct is created or not
        // Becasue solidity always return an initialized struct having default values
        bool exist;
        uint16 score;
        string[] cids;
    }

    struct NetworkCid {
        string did;
        string cid;
    }

    struct Review {
        uint256 time;
        string reviewerDid;
        Status givenStatus;
    }

    NetworkCid[] networkCids;
    mapping(string => User) private users;
    mapping(string => Status) private cidStatus;
    mapping(string => Review[]) private cidReviews;

    modifier doesUserExist(string memory did, bool isPresent) {
        require(
            users[did].exist == isPresent,
            !isPresent ? "User already exists" : "User dosen't exist"
        );
        _;
    }

    modifier cidPresent(string memory cid, bool isPresent) {
        require(
            (cidStatus[cid] == Status.DEFAULT) == isPresent,
            isPresent ? "Cid already present" : "Cid not present"
        );
        _;
    }

    function _compareString(string memory s1, string memory s2)
        internal
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
    }

    function _calculateCreditScore(string memory cid) internal view {
        for (uint256 i = 0; i < networkCids.length; i++) {
            if (_compareString(networkCids[i].cid, cid)) {
                // Credit Score can be calculated here
                break;
            }
        }
    }

    function _changeCidStatus(string memory cid) internal {
        uint256 verified = 0;
        uint256 refuted = 0;
        for (uint256 i = 0; i < cidReviews[cid].length; i++) {
            if (cidReviews[cid][i].givenStatus == Status.REFUTED) refuted++;
            if (cidReviews[cid][i].givenStatus == Status.VERIFIED) verified++;
        }
        if (refuted >= 3) {
            cidStatus[cid] = Status.REFUTED;
            _calculateCreditScore(cid);
        } else if (verified >= 3) {
            cidStatus[cid] = Status.VERIFIED;
            _calculateCreditScore(cid);
        } else cidStatus[cid] = Status.PENDING;
    }

    function addUser(string memory did) external doesUserExist(did, false) {
        string[] memory cids;
        users[did] = User(true, 300, cids);
    }

    function addUserCid(string memory did, string memory cid)
        external
        doesUserExist(did, true)
        cidPresent(cid, true)
    {
        users[did].cids.push(cid);
        cidStatus[cid] = Status.INIT;
        networkCids.push(NetworkCid(did, cid));
    }

    function getUserScore(string memory did)
        external
        view
        doesUserExist(did, true)
        returns (uint16)
    {
        return users[did].score;
    }

    function getUserCids(string memory did)
        external
        view
        doesUserExist(did, true)
        returns (string[] memory)
    {
        return users[did].cids;
    }

    function getNetworkCids() external view returns (NetworkCid[] memory) {
        return networkCids;
    }

    // Returns
    // 1. Total Uploaded Document
    // 2. Verified Documents
    // 3. Pending Documents
    // 4. Refute Documents
    function getUserStatus(string memory did)
        external
        view
        doesUserExist(did, true)
        returns (
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        uint256 verified = 0;
        uint256 pending = 0;
        uint256 refute = 0;
        string[] memory userCids = users[did].cids;

        for (uint256 i = 0; i < userCids.length; i++) {
            if (cidStatus[userCids[i]] == Status.VERIFIED) verified++;
            else if (cidStatus[userCids[i]] == Status.PENDING) pending++;
            else if (cidStatus[userCids[i]] == Status.REFUTED) refute++;
        }

        return (users[did].cids.length, verified, pending, refute);
    }

    function getCidStatus(string memory cid)
        external
        view
        cidPresent(cid, false)
        returns (Status)
    {
        return cidStatus[cid];
    }

    function verifyCid(string memory did, string memory cid)
        external
        cidPresent(cid, false)
    {
        cidReviews[cid].push(Review(block.timestamp, did, Status.VERIFIED));
        _changeCidStatus(cid);
    }

    function refuteCid(string memory did, string memory cid)
        external
        cidPresent(cid, false)
    {
        cidReviews[cid].push(Review(block.timestamp, did, Status.REFUTED));
        _changeCidStatus(cid);
    }

    function getCidReviews(string memory cid)
        external
        view
        cidPresent(cid, false)
        returns (Review[] memory)
    {
        return cidReviews[cid];
    }
}
