const express =require("express");
const app=express();
console.dir(app);
let port=3000;
app.listen(port,()=>{
  console.log(`app is listening to ${port}`)
})
app.get("/",(req,res)=>{
  res.send("<h1>Response succeed</h1>")
})
app.get("/name",(req,res)=>{
  res.send("<h1>Ayush</h1>")
})
app.get("/uni",(req,res)=>{
  res.send("<h1>MMDU</h1>")
})
// app.get("*",(req,res)=>{
//   res.send("<h1>Wrong Path</h1>")
// })
app.get("/:user/:id",(req,res)=>{
  let{user,id}=req.params;
  console.log(req.params);
  res.send(`<h2>Welcome ${user}</h2> <p>your id is</p>${id}.`)
})
app.get("search",(req,res)=>{
  let{q}=req.query;
  res.send(https://www.google.com/search?q=apple)
})
// app.use((req,res)=>{
//   console.log("Request Received @ "+port);
 
//   res.send("<h1>HELLOO</h1>");
// })