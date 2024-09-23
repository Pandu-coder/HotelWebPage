import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));




app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/", (req,res)=>{
  res.render("index.ejs");
});

app.post("/menu", (req,res)=>{
  res.render("menu.ejs");
});

app.post("/book_a_stay", (req,res)=>{
  res.render("book_a_stay.ejs");
});


app.post("/About", (req,res)=>{
  res.render("About.ejs");
});

app.post("/Contact", (req,res)=>{
  res.render("Contact.ejs");
});






app.listen(port, ()=>{
    console.log(`The express server is listening at ${port} .`);
});


