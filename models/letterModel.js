import mongoose from "mongoose";

const letterSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    }, 

    content : {
        type : String, 
        required : true
    }, 

    greeting : {
        type : String,
        required : true
    },

    writer : {
        type : String,
        required : true
    }
}, {timestamps : true})

export const letter = mongoose.model("letter", letterSchema)