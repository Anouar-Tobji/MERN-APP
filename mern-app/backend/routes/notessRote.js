const express = require ("express")
const Note = require ("../models/noteModel")
const router = express.Router()

router.route("/").get((req,res)=>{
    Note.find()
    .then(foundNotes=>res.json(foundNotes))
})

module.exports= router