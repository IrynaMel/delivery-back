const Order = require("../modals/order");

const putOrder = async (req, res) => {
  const { name, email, phone, address, products, total } = req.body;
  const newOrder = new Order({ name, email, phone, address, products, total });
  await newOrder.save();
  console.log(newOrder);
  res.status(201).json(newOrder);
};

const getOrders = async (req, res) => {
  const result = await Order.find({});

  res.json({
    message: "success",
    data: {
      result,
    },
  });
};

module.exports = { putOrder, getOrders };
