const { mongo } = require("mongoose");
const shorturl = require("shortid");
const {SC} = require("../models/Schema.js");
const shortid = require("shortid");



async function handelShortUrl(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"Require URL"});
    const sid = shorturl.generate(5);
    await SC.create({
        shortid:sid,
        redirectUrl:body.url,
        TC:[],
    })
    return res.render("shorturl",{
        id:sid,
    })
    // return res.status(201).json({sid});
}

const handleGetReq = async (req,res) => {
    const data = SC.find({})
    return res.status(200).send(data);
}





module.exports = {
    handelShortUrl,
    handleGetReq,
    
}