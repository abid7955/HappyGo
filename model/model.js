const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    id : {
        type:String,
        required: true
    },
    pass : {
        type:String,
        required:true,
        unique:true
    },
})

let entry = new mongoose.model("login",schema)
module.exports = entry