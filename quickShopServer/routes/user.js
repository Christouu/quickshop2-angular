const router = require("express").Router();
const cryptojs = require("crypto-js");

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
router.get("/", async (req, res) => {
  const query = req.query.new;

  try {
    const getUsers = query
      ? await User.find().sort({ _id: -1 }).limit(5) //sort by _id backwards and give me only 5
      : await User.find({});

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

//get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } }, //match my condition
      {
        $project: {
          month: { $month: "$createdAt" }, //take the month number from createdAt
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 }, //group them by number of users
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create user
router.post("/create", verifyTokenAndAdmin, async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptojs.AES.encrypt(
      req.body.password,
      process.env.CRYPTOJS_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
