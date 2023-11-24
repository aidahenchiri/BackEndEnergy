const mongoose=require("mongoose")
const jwt = require('jsonwebtoken');
//create shema
const schema=mongoose.Schema //schema : chemain

const userShema=new schema(
    {
        username: { 
            type:String,
            required:true // chine obligatoir}
        },
        email:{            
             type:String,
             required:true, // chine obligatoir}
            unique:true  // ne repete pas
        },
        password:{            
            type:String,
            required:true // chaine obligatoir}
       },
       phone:{            
        type:Number,
        required:true // chaine obligatoir}
       },
       favoris:{            
        type:[{}]
       }

    });
  
module.exports =mongoose.model("user",userShema) // nouveau nom product pour exporter  productSchema