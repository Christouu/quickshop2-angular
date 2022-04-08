const router = require("express").Router();
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

//create cart
router.post("/", verifyToken, async (req, res) => {
  const cart = new Cart(req.body);

  try {
    const createdCart = await cart.save();
    res.status(201).json(createdCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get user cart
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const getCart = await Cart.findOne({ userId: req.params.id });

    res.status(200).json(getCart);
  } catch (error) {
    res.status(50).json(error);
  }
});

module.exports = router;
