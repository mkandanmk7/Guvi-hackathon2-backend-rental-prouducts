const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://muthu:muthu123@cluster1.q9tm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//create obj  ; param url to m-client's constructor;

const client = new MongoClient(url);

module.exports = {
  //initially empty;
  db: null,
  products: null,

  async connectDB() {
    try {
      await client.connect(); //connect the DB
      console.log("DB connected successfully ");

      //select the DB ;

      this.db = client.db("rent_products");
      console.log("DB Selected Successfully");

      //Select the Collections;
      this.products = this.db.collection("products");
    } catch (err) {
      console.log("Error in DB connection", err);
    }
  },
};
