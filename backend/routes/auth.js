const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");



// REGISTER
router.post("/register", async (req, res) => {
   console.log("user",req.body)
   try {
      // hasing password throgh bycrypt
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // create new 
      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hashedPassword,
         desc: req.body.desc,
         from: req.body.from,
         city: req.body.city
      });

      // save user and return resonse
      const user = await newUser.save();
      console.log("hi", user)
      res.status(200).json(user);
   } catch (err) {
      res.status(500).json(err);
      console.log(err)
   }
})

//LOGIN
router.post("/login", async (req, res) => {
   try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");

      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).json("wrong password")

      res.status(200).json(user)
   } catch (err) {
      res.status(500).json(err);

   }
});

module.exports = router;