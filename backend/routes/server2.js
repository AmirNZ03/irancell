const express=require("express")
const cors=require("cors")
const http=require('http')
const bodyparser=require('body-parser')
const app=express()
const path=require('path')
// پردازش داده های فرم
app.use(express.urlencoded({ extended: false }))
app.use((req,res,next)=>{
console.log("middla");
next()
})

app.use('/all',(req,res,next)=>{
res.redirect('/add-poduct')
})
const admin=require('./admin')
app.use('/admin',admin)
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'404.html'))
})

app.use('/allproduct',(req,res,next)=>{
res.send('<h1>all-product hello</h1>')
})
app.use('/add-product',(req,res,next)=>{
console.log(req.body);
res.sendFile(path.join(__dirname,'add-products.html'))
})
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
})