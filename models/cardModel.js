import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    cardTitle : {
        type : String, 
        required : true
    }, 

    cardDescription : {
        type : String, 
        required : true
    } 

 
}, {timestamps : true})

export const Card = mongoose.model("card", cardSchema)