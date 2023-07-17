const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhayjain3082003:NEuBLlW62PzudV0T@cluster0.gorbmff.mongodb.net/food-factory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


