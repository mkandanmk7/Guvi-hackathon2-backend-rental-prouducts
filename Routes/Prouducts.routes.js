const productsApi = require("express").Router();

const service = require("../Services/products.service");

// const { ObjectID } = require("mongodb");
// const { products } = require("../mongoDB");

// const db = require("../mongoDB"); //connection

//post Api Routes;
// get methods

productsApi.get("/", service.getData);

module.exports = productsApi;
