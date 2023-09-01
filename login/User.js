const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    password:{
        type: String
    },
    email:{
        type: String
    }
}, {timestamps: true})

const User =  mongoose.model('User', userSchema)
module.exports = User