const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    detail: {
      type: String,
    },
    price: {
      type: String,
    },
    shop: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = Product;
