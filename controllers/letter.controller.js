import mongoose from "mongoose"
import { letter } from "../models/letterModel.js"


export const createletter = async (req, res, next)=>{
    try {
        const {name, content, greeting, writer} = req.body
        
        if(!name || !content ||!greeting ||!writer ){
            return res.status(400).json({
                success : false,
                message : "fill letter data"
            })
        }

        const isletterExists = await letter.find({})

        if(isletterExists && isletterExists.length !==0){
            return res.status(400).json({
                success : false,
                message : "delete the letter exits before creating"
            })
        }

        const letterData = await letter.create({
            name,
            content,
            greeting,
            writer
        })

        res.status(200).json({
            success : true,
            message : "letter created !",
            letterData
        })
    } catch (err) {
        console.error(err.message)
    }
}


export const updateletter = async (req, res, next)=>{
    try {
        const {name, content, greeting, writer} = req.body


        const letterId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(letterId)){
            return res.status(400).json({
                success : false,
                message : "invalid id"
            })
        }


        const filter = {}

        if(name) filter.name = name
        if(content) filter.content = content
        if(greeting) filter.greeting = greeting
        if(writer) filter.writer = writer
  

        const letterData = await letter.findByIdAndUpdate({_id : letterId}, {
            $set : filter
        }, {new : true, runValidators : true})

        if(!letterData){
            return res.status(404).json({
                success : false,
                message : "letter not found"
            })
        }

        res.status(200).json({
            success : true,
            message : "letter updated !",
            letterData
        })
    } catch (err) {
        console.error(err.message)
    }
}

export const getletter = async (req, res, next)=>{
    try {

        const letterData = await letter.find({})
        
        res.status(200).json({
            success : true,
            letterData
        })
    } catch (err) {
        console.error(err.message)
    }
}


export const deleteletter = async (req, res, next)=>{
    try {
        const letterId = req.params.id
        const letterData = await letter.findOneAndDelete({_id : letterId})

        if(!letterData){
            return res.status(404).json({
            success : false,
            message : "letter not found or already deleted"
        })
        }
        
        res.status(200).json({
            success : true,
            message : "letter deleted successfully !"
        })
    } catch (err) {
        console.error(err.message)
    }
}
