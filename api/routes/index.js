const express = require("express");
const router = express.Router();
const {User} = require("../models/index");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../auth/auth");
const Favs = require("../models/Favorite");
const S = require("sequelize");
const favorites = require("./favorites")

// Register
router.post("/register", async (req, res) => {

  try {
    const { full_name, email, password } = req.body;

    if (!(email && password && full_name)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ where:{email} });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    let encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      full_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user.id, email },
      // process.env.TOKEN_KEY,
      "prueba",
      {
        expiresIn: "2h",
      }
    );
    
    user.token = token;

    
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  
});

  
router.post("/login", async (req, res) => {

 
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
     return res.status(400).send("All input is required");
    }
    const user = await User.findOne({ where:{email} });

    if (user && (await bcrypt.compare(password, user.password))) {
      
      const token = jwt.sign(
        { user_id: user.id, email },
        "prueba",
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

router.use("/favorites",favorites)


// router.post("/favourites", auth,(req,res)=>{
//   Favs.create({
//     userId: req.user.user_id,
//     movieId: req.body.movieId
//   }).then(function () {
//     return res.status(200).json({ message: "added to favourites" });
//   }).catch(S.ValidationError, function (msg) {
//     return res.status(400).json( msg );
//   }).catch(function (err) {
//     return res.status(422).send(err.errors);
//   })
// })



module.exports = router;