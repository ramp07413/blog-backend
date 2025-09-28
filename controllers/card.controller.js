import mongoose from "mongoose"
import { Card} from "../models/cardModel.js"



export const createcard = async (req, res, next)=>{
    try {
        const {cardTitle, cardDescription} = req.body
        
        if(!cardTitle || !cardDescription ){
            return res.status(400).json({
                success : false,
                message : "fill card data"
            })
        }

    

        const cardData = await Card.create({
            cardTitle,
            cardDescription
        })

        res.status(200).json({
            success : true,
            message : "card created !",
            cardData
        })
    } catch (err) {
        console.error(err.message)
    }
}


export const updatecard = async (req, res, next)=>{
    try {
        const {cardTitle, cardDescription} = req.body


        const cardId = req.params.id

        if(!mongoose.Types.ObjectId.isValid(cardId)){
            return res.status(400).json({
                success : false,
                message : "invalid id"
            })
        }


        const filter = {}

        if(cardTitle) filter.cardTitle = cardTitle
        if(cardDescription) filter.cardDescription = cardDescription
        
  

        const cardData = await Card.findByIdAndUpdate({_id : cardId}, {
            $set : filter
        }, {new : true, runValidators : true})

        if(!cardData){
            return res.status(404).json({
                success : false,
                message : "card not found"
            })
        }

        res.status(200).json({
            success : true,
            message : "card updated !",
            cardData
        })
    } catch (err) {
        console.error(err.message)
    }
}

export const getcard = async (req, res, next)=>{
    try {

        const cardData = await Card.find({})
        
        res.status(200).json({
            success : true,
            cardData
        })
    } catch (err) {
        console.error(err.message)
    }
}


export const deletecard = async (req, res, next)=>{
    try {
        const cardId = req.params.id
        const cardData = await Card.findOneAndDelete({_id : cardId})

        if(!cardData){
            return res.status(404).json({
            success : false,
            message : "card not found or already deleted"
        })
        }
        
        res.status(200).json({
            success : true,
            message : "card deleted successfully !"
        })
    } catch (err) {
        console.error(err.message)
    }
}
