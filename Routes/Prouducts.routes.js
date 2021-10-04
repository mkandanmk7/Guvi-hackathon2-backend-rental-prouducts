const productsApi = require("express").Router();

const { ObjectID } = require("mongodb");
const { products } = require("../mongoDB");

const db = require("../mongoDB"); //connection

//post Api Routes;
// get methods

productsApi.get("/", async (req, res) => {
  try {
    // find  make it as array : toArray()
    const getData = await db.products.find().toArray(); // use toArray( ) spl for find( ) query

    console.log(getData);
    res.send(getData); // make it as array;   data to fEnd;
  } catch (err) {
    res.sendStatus(500); // send error status;
  }
});

module.exports = productsApi;
