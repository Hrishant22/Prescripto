import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import doctorRouter from './routes/doctorRoute.js'
import adminRouter from './routes/adminRoute.js'
import userRouter from './routes/useerRoutes.js'


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

//admin endpoints
app.use('/api/admin', adminRouter)

//Doctor endpoints
app.use('/api/doctor', doctorRouter)

// user endpoints
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log("Server Started", port))