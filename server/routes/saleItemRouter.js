import express from "express";
import cloudinary from "../utils/cloudinary.js";
import Card from "../models/mediaModel.js";
import upload from "../utils/multer.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = JSON.parse(req.params.id);
  const item = await Card.findOne({ _id: id.id });
  res.send(item).status(200);
});

router.get("/cards/:cat", async (req, res) => {
  const category = req.params.cat;

  const items = await Card.find({ category: category });
  res.send(items).status(200);
});

router.post("/upload", upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  res.send(result.secure_url).status(200);
});

router.post("/post", async (req, res) => {
  const itemData = req.body;

  const card = {
    ...itemData,
    createdZ: new Date(),
    lastEditedZ: new Date(),
  };

  const newCard = await new Card(card);

  const newSavedCard = await newCard.save();

  res.send(newSavedCard).status(200);
});

router.post("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const itemData = req.body;

  const response = await Card.findByIdAndUpdate(id, {
    ...itemData,
    lastEditedZ: new Date(),
  });

  res.send(response).status(200);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  const response = await Card.findByIdAndDelete(id);

  res.send(response);
});

export default router;
