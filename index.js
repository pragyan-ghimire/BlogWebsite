import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let titles = [];
let contents = [];

app.use(express.static("public"));// for static contents
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/create",(req,res)=>{
    res.render("create.ejs");
});

app.post("/post",(req,res)=>{
    titles.push(req.body["title"]);
    contents.push(req.body["content"]);
    res.render("index.ejs",{
        title:titles,
        content:contents,
    });
    // console.log(req.body["title"]);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});