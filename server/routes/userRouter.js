import express from "express";
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";
// import {
//   findUserAndUpdate,
//   findAllUser,
//   findUserByEmail,
//   findUserByCompanyName,
// } from "../models/controller.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
const router = express.Router();

//GET endpoint || description: http://localhost:3001/api/welcome
router.get("/welcome", (_, res) => {
  res.send("Hello World!!!!");
});

router.post("/uploadItem", upload.single("image"), async (req, res) => {
  console.log("req", req.files);
});

// // GET endpoint || description
// router.get("/getUserByCompanyName/:companyName", async (req, res) => {
//   console.log("req.params.companyName", req.params.companyName);
//   const companyName = req.params.companyName;
//   const user = await User.findOne({ companyName: companyName });
//   res.status(200).send(user);
// });

// // POST endpoint || description: takes data from userForm and sends to DB || http://localhost:3001/user/addUser
// router.post("/addUser", upload.single("image"), async (req, res) => {
//   try {
//     // receives new profile data from front end
//     let incomingData = JSON.parse(req.body.formData);
//     // console.log('incomingData', incomingData)
//     ///Verifying that user does not exist yet, before creating account
//     const userEmail = await findUserByEmail(incomingData.emailAddress);
//     if (userEmail) {
//       console.log("in duplicate user");
//       return res.status(400).send({ error: "This email already exists" });
//     }

//     const userCompanyName = await findUserByCompanyName(
//       incomingData.companyName
//     );
//     if (userCompanyName) {
//       console.log("in duplicate companyName");
//       return res
//         .status(400)
//         .send({ error: "This company name already exists" });
//     }

//     let newProfile = await new User(incomingData);
//     /////////////MY NEW CODE //////////////////////
//     if (req.file) {
//       const result = await cloudinary.uploader.upload(req.file.path);
//       // adds received data to User constructor
//       newProfile.photos[0] = result.secure_url;
//     }

//     //creating express account in stripe
//     const account = await stripeConfig.accounts.create({
//       email: newProfile.emailAddress,
//       country: "CA",
//       type: "express",
//       capabilities: {
//         card_payments: { requested: true },
//         transfers: { requested: true },
//       },
//       // business_type: 'individual',
//       business_profile: {
//         name: newProfile.userName,
//         product_description: newProfile.companyType,
//       },
//     });

//     console.log("acounttttt", account);

//     newProfile.stripeAccountId = account.id;
//     console.log("newProfileeee", newProfile);

//     // saves new user data to users collection database

//     bcrypt.genSalt(saltRounds, function (err, salt) {
//       bcrypt.hash(newProfile.password, salt, async function (err, hash) {
//         newProfile.password = hash;
//         const profile = await newProfile.save();
//         res.status(201).json(profile);
//       });
//     });
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(403);
//   }
// });

// // PUT endpoint || description: http://localhost:3001/user/updateUser
// router.put("/updateUser", upload.single("image"), async (req, res) => {
//   let incomingData = JSON.parse(req.body.formData);
//   let updateUserData;
//   if (req.file) {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     updateUserData = { ...incomingData, photos: [result.secure_url] };
//   } else {
//     updateUserData = incomingData;
//   }
//   console.log("updateUserData", updateUserData);

//   const response = findUserAndUpdate(updateUserData._id, updateUserData);
//   res.send(response);
// });

// // get endpoint || description: http://localhost:3001/user/getAllUser
// router.get("/getAllUser", async (req, res) => {
//   const allUser = await findAllUser();
//   res.status(200).json(allUser);
// });

export default router;
