const router = require("express").Router();

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const cryptoJS = require("crypto-js");
const User = require("../models/User");

//delete user
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("User deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//update user
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //if we are going to change the password , encrypt it first for protection
  if (req.body.password) {
    req.body.password = cryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTOJS_SECRET
    ).toString();
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },

      {
        //take everything inside the body and update his information
        $set: req.body,
      },
      //new:true is to return updated user otherwise it will return the old user his old info
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const getUsers = await User.find({});
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const getUser = await User.findById({ _id: req.params.id });

    const { password, ...otherInfo } = getUser._doc;
    res.status(200).json(otherInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
