const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB CONNECTED"))
  .catch((e) => console.error(e));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Back-end server is running");
});
