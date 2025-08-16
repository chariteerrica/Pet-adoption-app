const express = require("express");
const router = express.Router();
const { getPets, getPetById } = require("../controllers/petController");

// All routes are **relative paths**
router.get("/", getPets);
router.get("/:id", getPetById);

module.exports = router;
