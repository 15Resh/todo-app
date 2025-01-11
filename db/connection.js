import mongoose from 'mongoose'


export const connectDb = () => {

    const url = "mongodb+srv://test:test1234@mydb.wohan.mongodb.net/?retryWrites=true&w=majority&appName=mydb"
    mongoose.connect(url)
    .then(() => console.log('connected'))
    .catch((err) => console.log(err))
}