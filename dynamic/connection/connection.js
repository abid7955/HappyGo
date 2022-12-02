let mongoose = require('mongoose')
let URI = "mongodb+srv://abid8:pokemon2003@cluster0.fjk6m1g.mongodb.net/?retryWrites=true&w=majority"
let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI, {
            useUnifiedTopology : true,
            useNewUrlParser: true
        })
        console.log("Connected to the db")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb