const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const { upload } = require("./helper/fileHandling");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// allow cross-origin requests (Middle-ware)
app.use(cors());

// Connect with databse
mongoose.connect(
  "mongodb+srv://saadmajeed346:saad321@cluster0.48feh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

// Server Path localhost:4000/server
app.use(
  "/server",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// Endpoint for uploading document
app.post("/upload", function (req, res) {
  upload(req, res, (_) => {});
});

//Listening at 4000 port
app.listen(4000);
