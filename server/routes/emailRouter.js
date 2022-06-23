import express from "express";
const router = express.Router();

router.post("/sendEmail", (req, res) => {
  const data = req.body;
  console.log("data", data);
});

export default router;
