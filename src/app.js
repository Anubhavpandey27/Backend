const express = require("express");

const path=require("path");
const hbs =require("hbs");
const app =express();
const conn =require("./db/conn");
const port =process.env.port || 3000;
const sign_up=require("./models/Signup")
app.use(express.json())
app.use(conn);
app.use(express.urlencoded({extended:false}));
const path_template=path.join(__dirname,"../templates/views");
app.set("view engine","hbs")
app.set("views",path_template);
app.get("/", (req ,res)=>{
    res.render("index");
})
app.get("/login_page.hbs", (req ,res)=>{
    res.render("login_page.hbs");
})
app.get("/sign_up.hbs", (req ,res)=>{
    res.render("sign_up.hbs");
})
app.post("/sign_up.hbs", async(req ,res)=>{
    try{
    const email= req.body.email;
    const username =req.body.username;
    const password=req.body.password;
    const registerUser=new Signup({
        email:email,
        username:username,
        password:password
    })
    const register =await registerUser.save();
        res.status(201).render(index)
    }
    catch(error){res.status(400).send(error)}
})

app.listen(port ,()=>{
    console.log("connection successful");
})