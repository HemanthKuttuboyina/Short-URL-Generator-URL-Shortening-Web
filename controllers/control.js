
const SC = require("../models/Schema");
const shortid = require("shortid");



async function handelShortUrl(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"Require URL"});
    const sid = shortid.generate(5);
    await SC.create({
        shortid:sid,
        redirectUrl:body.url,
        TC:[],
    })

    const urls = await SC.find({});
    return res.render("shorturl",{
        id:sid,
        urls,
    })
    // return res.status(201).json({sid});
}







module.exports = {
    handelShortUrl,
    
    
}