import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../api/routes/user.route.js';
import authRoutes from '../api/routes/auth.route.js';


dotenv.config() 
mongoose.connect(process.env.MONGO_DB)
.then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error)); 
const app = express()
 

app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})


app.use('/api/user',userRoutes)
app.use('api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
    

})