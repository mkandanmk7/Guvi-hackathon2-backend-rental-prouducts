const productsApi = require("express").Router();

const service = require("../Services/products.service");

// const { products } = require("../mongoDB");

// const db = require("../mongoDB"); //connection

//post Api Routes;
// get methods

productsApi.get("/", service.getData); //getData
productsApi.post("/", service.postData); //postData
productsApi.delete("/:id", service.deleteData); //DeleteData
productsApi.put("/:id", service.updateData); //UpdateData

module.exports = productsApi;
