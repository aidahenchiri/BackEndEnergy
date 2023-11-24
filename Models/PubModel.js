const mongoose=require("mongoose")
//create schema of pub
const schema=mongoose.Schema 

const pubSchema=new schema(
    {
        title: { type:String,
        required:true 
        },
        description:{            
             type:String,
             required:true 
        },
        photo:{            
            type:String,
            required:true 
       }
    }
)
module.exports =mongoose.model("pub",pubSchema) 