import express from "express";
import fetch from "node-fetch";
import cloudinary from "../utils/cloudinary.js";
import Card from "../models/cardModel.js";
import upload from "../utils/multer.js";
const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  //   const result = await cloudinary.uploader.upload(req.file.path);
  //   console.log("result", result);

  const itemData = JSON.parse(req.body.formData);

  console.log("itemData", itemData);

  itemData.images = ["testing url"];

  const card = {
    ...itemData,
    images: ["testing url"],
    createdZ: new Date(),
    lastEditedZ: new Date(),
  };

  console.log("card", card);

  const newCard = await new Card(card);

  const newSavedCard = await newCard.save();

  console.log("newSavedCard", newSavedCard);

  //   // saves "newData" to the saleItems collection in database
  //   const newItem = await newData.save();

  //   // await findUserAndUpdate(postItem.vendorId, updatedSaleItems)

  //   // sends result from database back to front end
  //   res.json(newItem);
});

export default router;
