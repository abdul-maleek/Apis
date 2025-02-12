  require("dotenv").config(); 
  const express = require("express");
  const app = express();
  const userRouter = require(".Api/users/users.router");

  
  app.use(express.json());
app.use("/Api/users", userRouter);
app.listen(process.env.APP_PORT, () =>{
    console.log("server up and running on  PORT : ", process.env.APP_PORT );
});