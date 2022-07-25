const { expect, assert } = require("chai");
const { BigNumber } = require("ethers");

describe("FACTIIV TEST CASES", () => {
  //Will be called before each test
  beforeEach(async () => {
    // Getting contract using required contract name
    Factiiv = await ethers.getContractFactory("Factiiv");

    // @dev Deploying the contract on default hardhat development network
    // 'instance' will be our interface to communicate with contract
    instance = await Factiiv.deploy();

    // Getting the accounts for performing transactions
    // Default deployment account is linked with first account, 'BOB' in our case
    // NOTE: Some above deployment fee will already be deducted from first account BOB
    [BOB, ALICE, JON] = await ethers.getSigners();
  });

  describe("Checking User Credentials", () => {
    describe("Added user credentials checking", () => {
      beforeEach(async () => {
        // Login/Signup of a user for checking
        did = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";

        // Got sign-in transaction on which mining waiting will be done
        tx = await instance.addUser(did);
        await tx.wait();
      });

      it("Should have 300 credit score initially", async () => {
        // As initially the user will have default credit score (300)
        expect(await instance.getUserScore(did)).to.equal(300);
      });

      it("Should have empty string of cids initially", async () => {
        // As initially the user will have no cids (uploaded documents)
        expect(await instance.getUserCids(did)).to.deep.equal([]);
      });

      it("Should have default (0) document status initially", async () => {
        // As initially the user documents status will be default (0's)
        // [ TOTAL UPLOADED DOCUMENTS, VERIFIED, PENDING, REJECTED ]
        let B0 = BigNumber.from(0);
        expect(await instance.getUserStatus(did)).to.deep.equal([
          B0,
          B0,
          B0,
          B0,
        ]);
      });
    });

    describe("Not added user credentials checking", () => {
      it("Should not have any credentials present", async () => {
        // Exception handling on every credentials
        try {
          expect(await instance.getUserScore(did)).to.equal(300);
        } catch (_) {
          try {
            expect(await instance.getUserCids(did)).to.deep.equal([]);
          } catch (_) {
            try {
              let B0 = BigNumber.from(0);
              expect(await instance.getUserStatus(did)).to.deep.equal([
                B0,
                B0,
                B0,
                B0,
              ]);
            } catch (_) {
              // Explicit returning from here after error in every credential fetching
              return;
            }
          }
        }

        // Explicit error generation to check returned as expected or not
        expect(
          true,
          "This assertion should not get invoked, as no user is added"
        ).to.be.false;
      });
    });
  });

  describe("Adding same user multiple times", () => {
    it("Should not allow to add same user multiple times", async () => {
      did = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";

      // Got sign-in transaction on which mining waiting will be done
      tx = await instance.addUser(did);
      await tx.wait();

      // Adding another user which must invoke an exception
      try {
        tx = await instance.addUser(did);
        await tx.wait();
      } catch (_) {
        // Explicit returning from here after error in every credential fetching
        return;
      }

      // Explicit error generation to check returned as expected or not
      expect(
        true,
        "This assertion should not get invoked, as user can't get added multiple times"
      ).to.be.false;
    });
  });

  describe("Adding present user cid", () => {
    it("Should allow to add cid for user", async () => {
      did = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      cid = "89c123509afg8a327qwe197987faac9e5d9360lk";

      // Got sign-in transaction on which mining waiting will be done
      tx = await instance.addUser(did);
      await tx.wait();

      //In start should be empty as no cid present
      expect(await instance.getUserCids(did)).to.deep.equal([]);

      // Added a cid
      tx = await instance.addUserCid(did, cid);
      await tx.wait();

      expect(await instance.getUserCids(did)).to.deep.equal([cid]);
    });

    it("Should not allow to add same cid for user multiple times", async () => {
      did = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      cid = "89c123509afg8a327qwe197987faac9e5d9360lk";

      // Got sign-in transaction on which mining waiting will be done
      tx = await instance.addUser(did);
      await tx.wait();

      //In start should be empty as no cid present
      expect(await instance.getUserCids(did)).to.deep.equal([]);

      // Added a cid
      tx = await instance.addUserCid(did, cid);
      await tx.wait();

      expect(await instance.getUserCids(did)).to.deep.equal([cid]);

      // Trying to add same cid again
      try {
        tx = await instance.addUserCid(did, cid);
        await tx.wait();
      } catch (_) {
        // Explicit returning from here after error in every credential fetching
        return;
      }

      expect(
        true,
        "This assertion should not get invoked, as user cid can't get added multiple times"
      ).to.be.false;
    });
  });

  describe("Checking network cids", () => {
    it("Should get empty network cids", async () => {
      expect(await instance.getNetworkCids()).to.deep.equal([]);
    });

    it("Should get the total network cids", async () => {
      did1 = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      did2 = "did:ethr:0xaaaaa4089478a327f09197987f16f9e5d936e8a";
      did3 = "did:ethr:0xbbbbb14089478a327f09197987f16f9e5d936e8a";
      cid1 = "89c123509afg8a327qwe197987faac9e5d9qqppl";
      cid2 = "1nayc3509afgqqw2plgokf97987faac9e5d9asdfg";
      cid3 = "0paqb3509afgtuh27qwe19sasd7faac9e5d9tgbnh";
      cid4 = "1fllo3509afgxwr27qwe19rgbkfaac9e5d9dfgyh";
      cid5 = "xftui3509afgygd27qwe197987faac9e5dasdasd";
      cid6 = "b9c5714089478a327f09197987f16f9e5d936e8a";

      // Adding required testing data
      tx = await instance.addUser(did1);
      await tx.wait();
      tx = await instance.addUser(did2);
      await tx.wait();
      tx = await instance.addUser(did3);
      await tx.wait();
      tx = await instance.addUserCid(did1, cid1);
      await tx.wait();
      tx = await instance.addUserCid(did1, cid2);
      await tx.wait();
      tx = await instance.addUserCid(did1, cid3);
      await tx.wait();
      tx = await instance.addUserCid(did2, cid4);
      await tx.wait();
      tx = await instance.addUserCid(did3, cid5);
      await tx.wait();
      tx = await instance.addUserCid(did3, cid6);
      await tx.wait();

      expect(await instance.getNetworkCids()).to.deep.equal([
        [did1, cid1],
        [did1, cid2],
        [did1, cid3],
        [did2, cid4],
        [did3, cid5],
        [did3, cid6],
      ]);
    });
  });

  describe("Reviewing cids status", () => {
    it("Should be in INIT status in start", async () => {
      userDid = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      cid = "b9c5714089478a327f09197987f16f9e5d936e8a";

      // Adding required testing data
      tx = await instance.addUser(userDid);
      await tx.wait();
      tx = await instance.addUserCid(userDid, cid);
      await tx.wait();

      expect(await instance.getCidStatus(cid)).to.equal(1); // 1 == INIT
    });

    it("Should be in PENDING status due to less reviews", async () => {
      userDid = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      reviewerDid = "did:ethr:0xaaaaa4089478a327f09197987f16f9e5d936e8a";
      cid = "b9c5714089478a327f09197987f16f9e5d936e8a";

      // Adding required testing data
      tx = await instance.addUser(userDid);
      await tx.wait();
      tx = await instance.addUserCid(userDid, cid);
      await tx.wait();

      // Some random reviews
      tx = await instance.verifyCid(reviewerDid, cid);
      await tx.wait();
      tx = await instance.refuteCid(reviewerDid, cid);
      await tx.wait();

      expect(await instance.getCidStatus(cid)).to.equal(3); // 3 == PENDING
    });

    it("Should be in VERIFIED status due to required verifications", async () => {
      userDid = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      reviewerDid = "did:ethr:0xaaaaa4089478a327f09197987f16f9e5d936e8a";
      cid = "b9c5714089478a327f09197987f16f9e5d936e8a";

      // Adding required testing data
      tx = await instance.addUser(userDid);
      await tx.wait();
      tx = await instance.addUserCid(userDid, cid);
      await tx.wait();

      // Some random reviews
      tx = await instance.verifyCid(reviewerDid, cid);
      await tx.wait();
      tx = await instance.verifyCid(reviewerDid, cid);
      await tx.wait();
      tx = await instance.verifyCid(reviewerDid, cid);
      await tx.wait();

      expect(await instance.getCidStatus(cid)).to.equal(2); // 2 == VERIFIED
    });

    it("Should be in REFUTED status due to required refutes", async () => {
      userDid = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      reviewerDid = "did:ethr:0xaaaaa4089478a327f09197987f16f9e5d936e8a";
      cid = "b9c5714089478a327f09197987f16f9e5d936e8a";

      // Adding required testing data
      tx = await instance.addUser(userDid);
      await tx.wait();
      tx = await instance.addUserCid(userDid, cid);
      await tx.wait();

      // Some random reviews
      tx = await instance.refuteCid(reviewerDid, cid);
      await tx.wait();
      tx = await instance.refuteCid(reviewerDid, cid);
      await tx.wait();
      tx = await instance.refuteCid(reviewerDid, cid);
      await tx.wait();

      expect(await instance.getCidStatus(cid)).to.equal(4); // 4 == REFUTED
    });

    it("Should be getting reviews of a cid", async () => {
      userDid = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      reviewer1Did = "did:ethr:0xaaaaa4089478a327f09197987f16f9e5d936e8a";
      reviewer2Did = "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a";
      reviewer3Did = "did:ethr:0xlftui3509afgygd27qwe197987faac9e5dasdasd";
      cid = "b9c5714089478a327f09197987f16f9e5d936e8a";

      // Adding required testing data
      tx = await instance.addUser(userDid);
      await tx.wait();
      tx = await instance.addUserCid(userDid, cid);
      await tx.wait();

      // Some random reviews
      tx1 = await instance.refuteCid(reviewer1Did, cid);
      await tx1.wait();
      tx2 = await instance.verifyCid(reviewer1Did, cid);
      await tx2.wait();
      tx3 = await instance.refuteCid(reviewer2Did, cid);
      await tx3.wait();
      tx4 = await instance.verifyCid(reviewer2Did, cid);
      await tx4.wait();
      tx5 = await instance.refuteCid(reviewer3Did, cid);
      await tx5.wait();

      expect(await instance.getCidReviews(cid)).to.deep.equal([
        [
          BigNumber.from(
            Object(await ethers.provider.getBlock(Object(tx1).blockNumber))
              .timestamp
          ),
          reviewer1Did,
          4,
        ],
        [
          BigNumber.from(
            Object(await ethers.provider.getBlock(Object(tx2).blockNumber))
              .timestamp
          ),
          reviewer1Did,
          2,
        ],
        [
          BigNumber.from(
            Object(await ethers.provider.getBlock(Object(tx3).blockNumber))
              .timestamp
          ),
          reviewer2Did,
          4,
        ],
        [
          BigNumber.from(
            Object(await ethers.provider.getBlock(Object(tx4).blockNumber))
              .timestamp
          ),
          reviewer2Did,
          2,
        ],
        [
          BigNumber.from(
            Object(await ethers.provider.getBlock(Object(tx5).blockNumber))
              .timestamp
          ),
          reviewer3Did,
          4,
        ],
      ]);
    });
  });
});
