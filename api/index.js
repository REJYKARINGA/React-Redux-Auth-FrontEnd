import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() 
mongoose.connect(process.env.MONGO_DB)
.then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error)); 
const app = express()
 

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})