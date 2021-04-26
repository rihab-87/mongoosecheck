const mongoose = require('mongoose');
const express=require('express');
const app=express();
 require('dotenv').config();
//  const uri = process.env.MONGO_URI;
console.log(process.env)
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(err) throw err;
    console.log('database is connected')
})
var personschema= new mongoose.Schema({

name:{type:String,required:true},
age:Number,
favouritefood:[String]
})
const personmod=mongoose.model('personmod',personschema)


// var per=new personmod({
//     name:"rihab",
//     age:33,
//     favouritefood:["seafood","pizza"]
// })
// per.save((err,data)=>{
// if(err) throw err
// console.log(data)
// })

personmod.create([
{name:"hajer",age:33,favouritefood:["panini","sandwich"]},
{name:"bouthayna",age:30,favouritefood:["lazanya","spagheti"]},
{name:"bouthayna",age:28,favouritefood:["spagheti","ma9loub"]},
{name:"manel",age:27,favouritefood:["scalope","ma9loub"]},
{name:"imene",age:27,favouritefood:["spagheti","baguettefarci"]},
{name:"rihab",age:33,favouritefood:["pizza","spagheti"]},

])
//  .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

//Use model.find() to Search in  Database

// personmod.find({name:"bouthayna"},(err,data)=>{
//     if (err)throw err
//     console.log(data)
// })

//Use model.findById() to Search Your Database By _id
// personmod.findById({_id: '6086d10d517a040f54c6f3ef' },(err,data)=>{
//     if (err)throw err
//     console.log(data)
// })


//Use model.findOne() to Return a Single Matching Document from  Database
//  personmod.findOne({favouritefood:{$in:['seafood']}},(err,data)=>{
//     if (err)throw err
//     console.log(data)
// })


//Perform Classic Updates by Running Find, Edit, then Save
// personmod.findByIdAndUpdate({_id: '6086d10d517a040f54c6f3ef' },{$push:{favouritefood:"hhhhh"}},{new:true},(err,data)=>{
//  if(err) throw err
//  console.log(data)
// })




//Perform New Updates on a Document Using model.findOneAndUpdate()
// personmod.findOneAndUpdate({_id: '6086d10d517a040f54c6f3ef' },{$set:{age:20}}, {new:true} ,(err,data)=>{
//     if (err)throw err
//     console.log(data)
// })


//Delete One Document Using model.findByIdAndRemove
// personmod.findOneAndRemove({_id: '6085e96d7a8fa63798eaa130' },(err,data)=>{
//     if (err)throw err
//     console.log('is removed')
// })


//MongoDB and Mongoose - Delete Many Documents with model.remove()
// personmod.remove({name:'bouthayna'},(err,data)=>{
//     if (err)throw err
//     console.log(data)
// })


// Chain Search Query Helpers to Narrow Search Results
// personmod.find({ favouritefood:{$in:['spagheti']}}).sort({name: 1}).limit(2) .select({age: 0}) 
//  .exec()                  
// .then(docs => {
//    console.log(docs)
//  })
// .catch(err => {
//    console.error(err)
//  })


// app.get('/',(req,res)=>res.send(per))
app.listen(5000,()=>console.log('server running'))
