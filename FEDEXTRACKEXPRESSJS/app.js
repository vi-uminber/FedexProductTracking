import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import web from "./routes/web.js"
import cors from "cors"

const app = express()
const port =process.env.PORT || '4000' 

app.use(cors())
app.use(express.json())

app.use("/fedex", web)

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
    
})










