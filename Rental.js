const express = require("express");
const mongo = require("./mongoDB");
const productsData = require("./Routes/Prouducts.routes");

const server = express();

const port = "3001";

(async () => {
  try {
    //Connection call inside of iife ;
    await mongo.connectDB();

    // give json format  to front end (parsing data)
    server.use(express.json());

    //common mdw..
    server.use((req, res, next) => {
      console.log("common middleware triggered");
    });

    server.use("/products", productsData);

    //start the server in given port
    server.listen(port, () => {
      console.log(`Server started successfully at ${port}`);
    });
  } catch (err) {
    console.log("Error is collected", err);
  }
})();
