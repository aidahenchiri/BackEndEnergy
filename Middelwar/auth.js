const jwt = require('jsonwebtoken');
const user = require('../Models/userModel');
 
const auth =async (req, res, next) => {
   try {
       const token = req.headers['authorization'];  // recuprer  header diveser le tableau selon espace
       if(!token){
        res.status(400).send("not autorized")
          }
          const decodedToken = jwt.verify(token, process.env.SECRET_KEY);// decoder le token
         const findUser = await user.findOne({_id:decodedToken.id})
        if(!findUser)
        {
            res.status(400).send("not autorized")

        }
       req.user = findUser;
	next();
   } catch(error) {
       res.status(401).send({ error });
   }
};
module.exports= auth