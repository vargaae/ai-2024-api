const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is working");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

/*

/ --> res = this is working
AUTHENTICATION
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
+/profile/:userId --> PUT = user - if we want to modify the user account
/image --> PUT --> user - if we want to add Rank or other information of the user

*/