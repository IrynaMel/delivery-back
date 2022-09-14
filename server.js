const app = require("./app");
const mongoose = require("mongoose");
// const { DB_HOST } = process.env;
const DB_HOST =
  "mongodb+srv://Iryna:Iryna2706@cluster0.hej5ddz.mongodb.net/delivery?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.listen(3001, () => {
  console.log("Server running. Use our API on port: 3001");
});
