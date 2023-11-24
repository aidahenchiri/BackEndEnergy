const express=require("express")
const { addPub, getPubs, getById, deletePub, getByIdAndEdit } = require("../Controllers/pubControllers")

// require router
const router = express.Router()

 // add new product
 router.post('/add_pub',addPub)

// get all product
 router.get('/get_pub',getPubs)

 //  get product by id
 router.get('/get_byId/:_id',getById)   

// delete
 router.delete('/deletepub/:_id',deletePub)

// get by id and edit put: modification 
 router.put('/edit_pub/:_id',getByIdAndEdit)

 module.exports=router