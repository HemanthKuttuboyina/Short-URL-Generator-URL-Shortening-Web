const express = require("express");
const router = express.Router();
const SC = require("../models/Schema.js");

router.get("/", async (req,res)=>{

    const data = await SC.find({})
    return res.render("shorturl",{urls:data});
})




module.exports = router;

