const express = require ("express")
const Note = require ("../models/noteModel")
const router = express.Router()

router.route("/").get((req,res)=>{
    Note.find()
    .then(foundNotes=>res.json(foundNotes))
})
router.delete("/:_id" ,(req ,res)=>{

    const {_id} =req.params
    
    Note.remove({_id})
    .then(note=>  res.send({msg :"list of note" , note}))
    .catch(error => console.log(error))
    })





module.exports= router
