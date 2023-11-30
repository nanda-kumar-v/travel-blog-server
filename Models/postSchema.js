const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    Uname:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

const posts = mongoose.model("posts",postSchema)

module.exports = posts