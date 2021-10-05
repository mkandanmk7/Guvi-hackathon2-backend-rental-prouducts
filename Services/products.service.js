const { ObjectID } = require("mongodb"); //driver

const db = require("../mongoDB"); //selection db;

service = {
  async getData(req, res) {
    try {
      // find  make it as array : toArray()
      const getData = await db.products.find().toArray(); // use toArray( ) spl for find( ) query

      console.log(getData);
      res.send(getData); // make it as array;   data to fEnd;
    } catch (err) {
      res.sendStatus(500); // send error status;
    }
  },
};
module.exports = service;
