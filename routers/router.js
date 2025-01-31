const express = require("express");
const { handelShortUrl,handleGetReq,} = require('../controllers/control.js');
const router = express.Router();

router.post("/",handelShortUrl)
router.get("/",handleGetReq)


// router.get("/:shortid",)
module.exports = router;