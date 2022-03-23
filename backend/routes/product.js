const router = require("express").Router();
const {
  verifyTokenAuth,
  verifyTokenAdmin,
} = require("../middlewares/verifyToken");

const Product = require("../models/Product");

// CREATE PRODUCT
router.post("/", verifyTokenAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {}
});

// UPDATE PRODUCT
router.put("/:id", verifyTokenAuth, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE PRODUCT
router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL PRODUCT
router.get("/", async (req, res) => {
  try {
    let products;
    if (req.query.new) {
      products = await Product.find().sort({ _id: -1 }).limit(req.query.new);
    } else if (req.query.category) {
      products = await Product.find({
        catergories: { $in: [req.query.category] },
      });
    } else products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
