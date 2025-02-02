const express = require("express");
const app = express();
const router = require('./routers/router');
const Staticrouter = require("./routers/staticRouter")
const {SC} = require("./models/Schema");
const path = require('path')
const mongo = require('mongoose');
mongo.connect("mongodb://127.0.0.1:27017/short-url").then(()=>console.log("MongoDb Connected"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/url",router);
app.use("/",Staticrouter)
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get("/url/:shortUrl",async (req,res) => {
    const shortUrl = req.params.shortUrl;
    const data = await SC.findOneAndUpdate(
        { shortid : shortUrl},
        { $push: { TC:{time:Date.now()}}},
        {new : true}
);
    if(!data) return res.status(402).send("<h2>Data not found</h2>")
    return res.redirect(data.redirectUrl);
})
app.listen(3000,()=>{console.log(`Server Ls Live At http//localhost:3000`)});