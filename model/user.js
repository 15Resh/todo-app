import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
})



export const user = mongoose.model('Users', userSchema)