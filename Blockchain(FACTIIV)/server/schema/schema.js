const graphql = require("graphql");
const User = require("../model/user");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLScalarType,
} = graphql;
const {
  getUserScore,
  addNewUser,
  getUserCids,
  getUserStatus,
  getNetworkCids,
  getCidStatus,
  verifyCid,
  refuteCid,
  getCidReviews,
  sendBonus,
} = require("../chainCalls/calls");

const Generic = new GraphQLScalarType({
  name: "Generic",
  description: "Generic type to handle solidity structs, tuples etc.",
  serialize: (value) => value.toString(),
});

const UserReturnType = new GraphQLObjectType({
  name: "users",
  fields: () => ({
    did: { type: GraphQLString },
    Rdid: { type: GraphQLString },
    cid: { type: GraphQLString },
    score: { type: GraphQLInt },
    cids: { type: GraphQLList(GraphQLString) },
    status: { type: GraphQLList(Generic) },
    upload: { type: GraphQLInt },
    referals: { type: GraphQLInt },
    networkCids: { type: GraphQLList(Generic) },
    cidStatus: { type: GraphQLInt },
    reviews: { type: GraphQLList(Generic) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    UserExit: {
      type: UserReturnType,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        return User.findOne({ did: args.did });
      },
    },
    getUserScore: {
      type: UserReturnType,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        let res = await getUserScore(args.did);
        let _user = new User({
          score: res,
        });
        return _user;
      },
    },
    getUserCids: {
      type: UserReturnType,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        let res = await getUserCids(args.did);
        let _user = new User({
          cids: res,
        });
        return _user;
      },
    },
    getNetworkCids: {
      type: UserReturnType,
      args: {},
      async resolve(parent, args) {
        let res = await getNetworkCids();
        let _user = new User({
          networkCids: res,
        });
        return _user;
      },
    },
    getUserStatus: {
      type: UserReturnType,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        let res = await getUserStatus(args.did);
        let _user = new User({
          status: res,
        });
        return _user;
      },
    },
    getCidStatus: {
      type: UserReturnType,
      args: {
        cid: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        let res = await getCidStatus(args.cid);
        let _user = new User({
          cidStatus: res,
        });
        return _user;
      },
    },
    getUserDocument: {
      type: UserReturnType,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const res = await User.findOne({ did: args.did });
        let _user = new User({
          upload: res.upload,
        });
        return _user;
      },
    },
    getCidReviews: {
      type: UserReturnType,
      args: {
        cid: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        return new User({
          reviews: await getCidReviews(args.cid),
        });
      },
    },
    getReferals: {
      type: UserReturnType,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const res = await User.findOne({ did: args.did });
        let _user = new User({
          referals: res.referals,
        });
        return _user;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserReturnType,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
        Rdid: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        let _user;
        if (args.Rdid != "") {
          _user = new User({
            did: args.did,
            Rdid: args.Rdid,
            upload: 0,
            referals: 0,
          });
          const res = await User.findOne({ did: args.did });
          if (!res) {
            const res = await User.findOneAndUpdate(
              { did: args.Rdid },
              { $inc: { referals: 1 } },
              {
                new: true,
              }
            );
            await addNewUser(args.did);
            return _user.save();
          } else {
            return "Exit";
          }
        } else {
          _user = new User({
            did: args.did,
            upload: 0,
            referals: 0,
          });
          const res = await User.findOne({ did: args.did });
          if (!res) {
            await addNewUser(args.did);
            return _user.save();
          } else {
            return "Exit";
          }
        }
      },
    },
    updateUser: {
      type: UserReturnType,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
        upload: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parent, args) {
        const res = await User.findOneAndUpdate(
          { did: args.did },
          { upload: args.upload },
          {
            new: true,
          }
        );
        let _user = new User({
          did: args.did,
          upload: res.upload,
        });
        return _user;
      },
    },
    verifyCid: {
      type: GraphQLBoolean,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
        cid: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        await verifyCid(args.did, args.cid);
      },
    },
    refuteCid: {
      type: GraphQLBoolean,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
        cid: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        await refuteCid(args.did, args.cid);
      },
    },
    sendETHBonus: {
      type: GraphQLBoolean,
      args: {
        did: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        claims: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parent, args) {
        const BONUS_AMOUNT = 0.1;
        let total = BONUS_AMOUNT * args.claims;
        if (total > 0) {
          const res = await User.findOneAndUpdate(
            { did: args.did },
            { referals: 0 },
            {
              new: true,
            }
          );
          await sendBonus(args.address, total);
        }
      },
    },
  },
});

// Export
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
