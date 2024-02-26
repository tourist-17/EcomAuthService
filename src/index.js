const express = require("express");
const apiRoutes = require("./routes/index");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const app = express();
// const db = require("./models/index");
// const {User,Role} = require("./models/index");

// const UserService = require('./services/user-service');

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server Start on PORT ${PORT}`);

    // const u1 = await User.findByPk(3);
    // const r1 = await Role.findByPk(2);
    // u1.addRole(r1);

    // const service = new UserService();
    // const newtoken = service.createToken({email:'yadsak00@gmail.com',id:1});
    // console.log(newtoken);
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhZHNhazAwQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MDcyMTk5NTMsImV4cCI6MTcwNzIyMzU1M30.rNeSUh-B-OrcAYK2iBOV41dTyCWjqb9MuqK63CmA8qc";
    // const response = service.verifyToken(token);
    // console.log(response);
  });
};
prepareAndStartServer();
