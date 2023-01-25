const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express();
const port = 8081
app.use(cors());
app.use(bodyParser.json());


const {Schema} = mongoose
const coursesSchema = new Schema({
    title: ({ type: String, required: true}),
    imgUrl: ({ type: String, required: true}),
    author: ({ type: String, required: true}),
    imgUrl2: ({ type: String, required: true}),
    name: ({ type: String, required: true}),
    price: ({ type: Number, required: true}),
})

const Courses = mongoose.model("Courses", coursesSchema)



app.get("/courses",(req,res) => {
    Courses.find({}, (err,docs) => {
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message: err})
        }
    })
})

app.get("/courses/:id",(req,res) => {
    const {id} = req.params
    Courses.findById(id, (err,doc) => {
        if(!err){
            if(doc){
                res.send(doc);
                res.status(200)
            }else{
                res.status(404).json({message:err})
            }
        }else{
            res.status(200).json({message: err})
        }
    })
})

app.post("/courses", (req,res) => {
     let courses= new  Courses({
        title: req.body.title,
        imgUrl: req.body.imgUrl,
        author: req.body.author,
        imgUrl2: req.body.imgUrl2,
        name: req.body.name,
        price: req.body.price,
    })
     courses.save();
    res.send({message: "success"})
})

app.delete("/courses/:id", (req,res) => {
    const {id} = req.params
    Courses.findByIdAndDelete(id, (err) => {
        if(!err){
            res.send("Deleted")
        }
    })

   
})

mongoose.connect("mongodb+srv://izzetquliyev:izzetquliyev@cluster0.ty33fsx.mongodb.net/Courses?retryWrites=true&w=majority")
app.listen(port, ()=>{
    console.log(`port localhost://${port}`);
})



