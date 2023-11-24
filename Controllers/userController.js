const user=require("../Models/userModel")
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const stringify =require('flatted');
const userModel = require("../Models/userModel");
 
exports.register=async(req,res)=>{
try {
   const{username,email,password,phone}=req.body
   const findUser=await user.findOne({username})
   if (!findUser){
    const newUser= new user(req.body)
    const salt=10 
    const hashedPassword=await bcrypt.hash(password,salt)
    newUser.password=hashedPassword
    await newUser.save()
    const token =jwt.sign({id:newUser._id},process.env.SECRET_KEY)
    res.status(200).send(JSON.stringify ({msg:"registerd successfuly",newUser,token}))
     }
    else {
        res.status(400).send({msg:"user already exist"})
     }}
 catch (error) {
    res.status(500).send({msg:"error on register",error})  
}}


exports.login=async(req,res)=>{   // appel tous les products
    try {
        const{username,password}=req.body
        const findUser=await user.findOne({username})
        const checkPassword=await bcrypt.compare(password,findUser.password)

        if (!findUser){
          res.status(400).send("username not found")
        } 
        else if (!checkPassword)
        {
            res.status(400).send("pasword not found")

        }else{
            const token =jwt.sign({id:findUser._id},process.env.SECRET_KEY)
            res.status(200).send({msg:"logged in successfuly",findUser,token})
           

        }
    } catch (error) {
        res.status(500).send({msg:"error on getting all login",error})  // erreur client 
    }
    
    }

    exports.deleteUser=async(req,res)=>{   // appel tous les products
        try {
            const {_id}=req.params  //  lien de id
             await user.findByIdAndDelete({_id})
             res.status(200).send({msg:"deleted successfuly"})

         } catch (error) {
            res.status(500).send({msg:"error on deleteuser",error})  // erreur client 
        }
        
        }
    


 

        exports.getByIdAndEdit =async(req,res)=>{
            try {
                const {_id}=req.params  //  lien de id
                const newUser=req.body
                const salt=10 
                const hashedPassword=await bcrypt.hash(newUser.password,salt)
                newUser.password=hashedPassword
                const users=  await user.updateOne({_id},{$set:newUser})
          // product.getByIdAndEdit({_id},newProduct)   ou bien
            res.status(200).send({msg:"user updated successfuly",newUser})
            
            } catch (error) {
                res.status(500).send({msg:"cannot add user",error})  // erreur client 
            }
            }
                

                exports.favorisMovie=async(req,res)=>{
                    try {
                        const {userId}=req.params
                        console.log(userId)

                        const {_id,jour,nom,horaire,typeCours}=req.body
                       

                    //    const favoris= new userModel({_id,Title,Descrption,PostUrl,Rate,Trailer})
                         const userN = await  userModel.findById(userId)
                        //  const verif = await userN.favoris.findById(_id)
                        //  console.log(verif)

                        //  if (!verif){
                            userN.favoris.push({_id,jour,nom,horaire,typeCours})                                                                       
                         await userN.save()
                          res.status(200).send({msg:"the Movie has been added successfuly",userN})
                        //  }
                    } catch (error) {
                        res.status(400).send({msg:"cannot add the movie",error})  // erreur client 
                    }
                    }

                    // add date réservation in user 
                    // exports.adddateResrvation=async(req,res)=>{
                    //     try {
                    //        const{jour,nom,horaire,typeCours}=req.body
                    //        const newMovie= new movieModel({jour,nom,horaire,typeCours})
                    //     await newMovie.save()
                    //     const movies= await movieModel.find()
                    //     res.status(200).send({msg:"the Movie has been added successfuly",movies})
                        
                    //     } catch (error) {
                    //         res.status(400).send({msg:"cannot add the Movie",error})  // erreur client 
                    //     }
                    //     }
                    