const express = require("express");
const router = express.Router();
const { putOrder, getOrders } = require("../../controllers/orders");
const { ctrlWrapper } = require("../../middleWares");

const controllers = require("../../controllers/products");

router.get("/", ctrlWrapper(controllers.getAllProducts));

router.post("/", ctrlWrapper(putOrder));

router.get("/orders", ctrlWrapper(getOrders));

module.exports = router;
