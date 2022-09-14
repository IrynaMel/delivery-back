const { Schema, model } = require("mongoose");

const orderSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    products: {
      type: [Object],
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = Order;
