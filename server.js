const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });