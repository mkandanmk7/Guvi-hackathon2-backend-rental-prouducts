require("dotenv").config(); // for env   bydefault:node have process()
const express = require("express");
const mongo = require("./mongoDB");
const productsData = require("./Routes/Prouducts.routes");

const server = express();

// const port = "3001";

(async () => {
  try {
    //Connection call inside of iife ;
    await mongo.connectDB();

    // give json format  to front end (parsing data)
    server.use(express.json());

    //common mdw..
    server.use((req, res, next) => {
      console.log("common middleware triggered");
      next();
    });

    server.use("/products", productsData);

    //start the server in given port
    server.listen(process.env.port, () => {
      console.log(`Server started successfully at ${process.env.port}`);
    });
  } catch (err) {
    console.log("Error is collected", err);
  }
})();
