import express from 'express'
import cors from 'cors'
import { Router } from './routes/routes.js'
import { connectDb } from './db/connection.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/',Router)


connectDb()
app.listen(5000,(err) => {
    if(err){
        console.log('err',err)
    }else{
        console.log('listen on 5000')
    }
})