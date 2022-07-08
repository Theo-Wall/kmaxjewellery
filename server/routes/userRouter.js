import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
const router = express.Router();

// POST endpoint || description: takes data from userForm and sends to DB || http://localhost:3001/user/addUser
router.post("/addUser", async (req, res) => {
  try {
    let newProfile = await new User({
      emailAddress: "KarenMKryzan@shaw.ca",
      password: "PandaBear45",
    });
    // saves new user data to users collection database

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(newProfile.password, salt, async function (err, hash) {
        newProfile.password = hash;
        // const profile = await newProfile.save();
        res.status(201).json(newProfile);
      });
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(403);
  }
});

export default router;
