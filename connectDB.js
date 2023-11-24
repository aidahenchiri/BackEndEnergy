const mongoose= require("mongoose")
const connect =async()=>
{
    try {
        console.log("initialisation")
        console.log("strating")
        await mongoose.connect(process.env.DB_URI)
        console.log("conneted to database")


    } catch (error) {
        
    }
}
module.exports = connect