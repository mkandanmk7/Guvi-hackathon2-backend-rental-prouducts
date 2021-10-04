const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

//create obj  ; param url to m-client's constructor;

const client = new MongoClient(url);

module.exports = {
  //initially empty;
  db: null,
  products: null,

  async connectDB() {
    await client.connect(); //connect the DB
    console.log("DB connected successfully ");

    //select the DB ;

    this.db = client.db("rent_products");
    console.log("DB Selected Successfully");

    //Select the Collections;
    this.products = this.db.collection("prouducts");
  },
};
