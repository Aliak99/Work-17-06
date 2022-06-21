const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
const phone = require("../controllers/phone.controller.js");

// router.use(bodyParser.json());

router.post("/", phone.create);
router.get("/", phone.findAll);
router.get("/:id", phone.findOne);
router.put("/:id", phone.update);
router.delete("/:id", phone.delete);

module.exports = router;
