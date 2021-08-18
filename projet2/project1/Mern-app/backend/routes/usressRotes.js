
const express = require ("express")
const User = require ("../models/userModel")

const {DeleteUser} =require ("../controllers/userControllers.js");
const router = express.Router()

router.route("/").get((req,res)=>{
    User.find()
    .then(foundUsers=>res.json(foundUsers))
})
router.route("/:id").delete(DeleteUser)
module.exports= router