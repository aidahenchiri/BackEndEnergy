const PubModel = require("../Models/PubModel")
const pub=require("../Models/PubModel")

// add publication
exports.addPub=async(req,res)=>{
try {
   const{title,description,photo}=req.body
   const newPub= new PubModel({title,description,photo})
await newPub.save()
const pubs= await PubModel.find()

res.status(200).send({msg:"new publication added successfuly",pubs})

} catch (error) {
    res.status(400).send({msg:"cannot add publication",error})  
}
}

// Get  publication
exports.getPubs=async(req,res)=>{   
    try {
       const pubs= await pub.find()
    res.status(200).send({msg:"publication found successfuly",pubs})
    
    } catch (error) {
        res.status(500).send({msg:"error on getting all publication",error})  // erreur client 
    }
    
    }

    // Get  pub by id

exports.getById=async(req,res)=>{   
    try {
        const {_id}=req.params  

       const pubs= await pub.findById({_id})
       if(!pubs)
       {
        res.status(500).send({msg:"error non valide "}) 
       }
       else 
       {
        res.status(200).send({msg:"publication found successfuly",pubs})
       }
     } catch (error) {
        res.status(500).send({msg:"error on getting  publication id",error})  // erreur client 
    }    
    }

    // delete one pub
    exports.deletePub=async(req,res)=>{   // appel tous les products
        try {
            const {_id}=req.params  //  lien de id
             await pub.findByIdAndDelete({_id})
             res.status(200).send({msg:"deleted successfuly"})

         } catch (error) {
            res.status(500).send({msg:"error on delete publication",error})  // erreur client 
        }
        
        }

        // Edit one pub
        exports.getByIdAndEdit =async(req,res)=>{
            try {
                const {_id}=req.params  //  lien de id
                const newPub=req.body
                const pubs=await pub.updateOne({_id},{$set:newPub})        
                 res.status(200).send({msg:"publication updated successfuly",newPub})
            
            } catch (error) {
                res.status(400).send({msg:"cannot add publication",error})  // erreur client 
            }
            }