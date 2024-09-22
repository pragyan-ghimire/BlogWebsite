import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let titles = [];
let contents = [];

app.use(express.static("public"));// for static contents
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        title:titles,
        content:contents
    });
});

app.get("/create",(req,res)=>{
    res.render("create.ejs");
});

app.post("/",(req,res)=>{
    titles.push(req.body["title"]);
    contents.push(req.body["content"]);
    res.render("index.ejs",{
        title:titles,
        content:contents,
    });
    // console.log(titles);
});

app.get("/edit/:index",(req,res)=>{
    const index = req.params.index;
    res.render("create.ejs",{
        titleValue:titles[index],
        contentValue:contents[index],
        indexValue:index,
    });
});
app.post("/update/:index",(req,res)=>{
    const index = req.params.index;
    titles.splice(index, 1, req.body["title"]);  // The first parameter is the index, the second is how many elements to remove, and the third is the new value.
    contents.splice(index, 1, req.body["content"]);  // The first parameter is the index, the second is how many elements to remove, and the third is the new value.

    // contents[index] = req.body["content"];
    // console.log(titles);
    res.render("index.ejs",{
        title:titles,
        content:contents,
    });
});
app.post("/delete/:index",(req,res)=>{
    const index = req.params.index;
    titles.splice(index,1); // remove 1 element at index
    contents.splice(index,1);
    // console.log(titles);
    res.render("index.ejs",{
        title:titles,
        content:contents,
    });
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});