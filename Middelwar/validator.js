const { check, validationResult } = require("express-validator")





exports.registerValidation=()=>
 [
    check("username",'username required!!').notEmpty(),  // username no vide
    check("email",'email required!!').isEmail(),  
    check("password",'password min 5 carecter required!!').isLength({min:5}).isStrongPassword({minUpercase:1,minNumbers:2})


 ]

    exports.Validator=(req,res,next)=>
    {const errors=validationResult(req)
        errors.isEmpty()?next():res.status(400).send(errors.array())
    }