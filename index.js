import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));// for static contents
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/create",(req,res)=>{
    res.render("create.ejs");
});

app.post("/post",(req,res)=>{
    res.render("index.ejs",{
        title:req.body["title"],
        content:req.body["content"],
    });
    // console.log(req.body["title"]);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});