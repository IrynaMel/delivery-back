const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const { DB_HOST } = process.env;
// const DB_HOST =
//   "mongodb+srv://Iryna:Iryna2706@cluster0.hej5ddz.mongodb.net/delivery?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Server running. Use our API on port: ${port}`);
});
