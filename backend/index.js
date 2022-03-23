const express = require("express");
const app = express();
db = require("./configs/mongoose");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
async function main() {
  require("dotenv").config();
  try {
    await db.connect();
    app.listen(process.env.PORT, () => {
      console.log(`App listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
main().catch(console.error);
