const cors = require("cors");
require("dotenv").config(); // for env   bydefault:node have process()
const express = require("express");
const mongo = require("./shared/mongoDB");

const productsData = require("./Routes/Prouducts.routes");

const server = express();

const PORT = process.env.PORT || "3001";

(async () => {
  try {
    //Connection call inside of iife ;
    await mongo.connectDB();

    //  *** mdw to allow access our api to others
    server.use(cors()); // limit => cors({origin:["netlify url"]})

    // give json format  to front end (parsing data)
    server.use(express.json());

    //common mdw..
    server.use((req, res, next) => {
      console.log(`${new Date()} - ${req.url} - ${req.method}`);
      next();
    });

    server.use("/products", productsData);

    //start the server in given port
    server.listen(process.env.PORT, () => {
      console.log(`Server started successfully at ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Error is collected", err);
  }
})();
