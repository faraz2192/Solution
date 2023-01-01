var express = require('express');
const app =express();
app.get("/",(req,res)=>
{
    res.end("<h1>Hello, This is an example for Exam </h1>");
});


app.listen(8000,()=>{
console.log("Server is listening on port 8000");
});
