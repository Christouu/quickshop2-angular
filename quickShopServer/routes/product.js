const router = require("express").Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const Product = require("../models/Product");

//create product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    quantity: req.body.quantity,
    categories: req.body.categories,
    allKinds: req.body.allKinds,
    onSale: req.body.onSale,
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: req.params.id },
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

//delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("Product deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get product
router.get("/find/:id", async (req, res) => {
  try {
    const getProduct = await Product.findById({ _id: req.params.id });
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all products
router.get("/", async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;

  try {
    let products;

    if (queryNew) {
      // if ?new in dns get all products, sort them by createdAt with the newest first, then get only the first 20
      products = await Product.find().sort({ createdAt: -1 }).limit(20);
    } else if (queryCategory) {
      products = await Product.find({
        //search in categories key
        categories: {
          //where queryCategory is included in categories
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find({});
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get products on sale
router.get("/onSale", async (req, res) => {
  try {
    const productsOnSale = await Product.find({ onSale: true });
    res.status(200).json(productsOnSale);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
