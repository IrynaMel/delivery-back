const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

const contactsRouter = require("./routes/api/products");
// const authRouter = require("./routes/api/auth");
// const userRouter = require("./routes/api/users");

const app = express();

app.use(express.static("public"));

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/products", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
