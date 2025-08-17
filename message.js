const express = require("express");
const router = express.Router();
const { processPayload } = require("../utils/payloadProcessor");

router.post("/webhook", async (req, res) => {
  await processPayload(req.body);
  res.json({ success: true });
});

module.exports = router;
