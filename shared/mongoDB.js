const { MongoClient } = require("mongodb");

//  ****  process.env handle this...****
// const url ="mongodb+srv://muthu:muthu123@cluster1.q9tm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//   const dbName="rent_products";

//create obj  ; param url to m-client's constructor;
const client = new MongoClient(process.env.url);

module.exports = {
  //initially empty;
  db: null,
  products: null,

  async connectDB() {
    try {
      await client.connect(); //connect the DB
      console.log("DB connected successfully at ", process.env.url);

      //select the DB ;

      this.db = client.db(process.env.dbName);
      console.log("DB Selected Successfully", process.env.dbName);

      //Select the Collections;
      this.products = this.db.collection("products");
    } catch (err) {
      console.log("Error in DB connection", err);
    }
  },
};
