import connectDB from './backend/config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './backend/routes/userRoute.js'

connectDB()
dotenv.config()

const app = express()

//Creating API for user
app.use('/api/documents', userRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))