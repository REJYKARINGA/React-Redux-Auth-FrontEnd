import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from 'body-parser'

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
// import cors from 'cors'

dotenv.config();
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:5173',
//     optionsSuccessStatus : 200,
//   };  

// app.use(cors(corsOptions));

// app.use(cors({
//   origin: 'http://localhost:5173', // Update this to your front-end URL
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // If you need to send cookies along with requests
// }));
//   // To handle preflight requests
// app.options('*', cors());
   
      
    
  app.use(bodyParser.urlencoded({ extended: true }));

  
app.use(bodyParser.json()); 

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error in error middleware";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode, 
  });
}); 

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  