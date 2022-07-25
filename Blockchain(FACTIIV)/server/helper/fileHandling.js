var multer = require("multer");
var pkg = import("./web3Storage.mjs");
const fs = require("fs");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "clientFiles");
  },
  filename: function (req, file, cb) {
    let fileID = Date.now() + "-" + file.originalname;
    cb(null, fileID);
    const path = "./clientFiles/" + fileID;
    setTimeout(() => {
      pkg.then(async (data) => {
        await data.default.storeFilesWeb3Storage(
          file.originalname.split(".")[0],
          fileID
        );
        fs.unlinkSync(path); //file removed
      });
    }, 3000);
  },
});

var upload = multer({ storage: storage }).single("file");

module.exports = { upload };
