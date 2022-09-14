const Product = require("../modals/product");

const getAllProducts = async (req, res) => {
  const result = await Product.find({});

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

const getOneProduct = async (req, res) => {
  const { _id } = req.params;
  const result = await Product.find({ _id });

  res.json({
    code: 200,
    result,
  });
};
module.exports = { getAllProducts, getOneProduct };
