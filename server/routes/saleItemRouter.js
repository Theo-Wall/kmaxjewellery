import express from "express";
import fetch from "node-fetch";
import cloudinary from "../utils/cloudinary.js";
import Card from "../models/cardModel.js";
import upload from "../utils/multer.js";
const router = express.Router();

router.get("/cards/:cat", async (req, res) => {
  const category = req.params.cat;

  const items = await Card.find({ category: category });
  res.send(items).status(200);
});

router.post("/upload", upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);

  const itemData = JSON.parse(req.body.formData);

  itemData.images = ["testing url"];

  const card = {
    ...itemData,
    images: [result.secure_url],
    createdZ: new Date(),
    lastEditedZ: new Date(),
  };

  const newCard = await new Card(card);

  const newSavedCard = await newCard.save();

  res.send(newSavedCard).status(200);
});

router.post("/edit/:id", upload.single("image"), async (req, res) => {
  const id = req.params.id;
  const itemData = JSON.parse(req.body.formData);

  if (req.file?.path) {
    const result = await cloudinary.uploader.upload(req.file.path);

    const response = await Card.findByIdAndUpdate(id, {
      ...itemData,
      images: [result.secure_url],
      lastEditedZ: new Date(),
    });

    res.send(response).status(200);
  } else {
    const response = await Card.findByIdAndUpdate(id, {
      ...itemData,
      lastEditedZ: new Date(),
    });

    res.send(response).status(200);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  const response = await Card.findByIdAndDelete(id);

  res.send(response);
});

export default router;
