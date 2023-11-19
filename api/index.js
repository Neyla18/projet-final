import express from "express"
import cors from "cors"


import bookRoutes from "./routes/book.js"
import  eventsRoutes from "./routes/events.js"
import  authRoutes from "./routes/auth.js"
import genreRoutes from "./routes/genre.js"



const app = express()

app.use(express.json());
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoutes)
app.use("/api/events",eventsRoutes)
app.use("/api/book",bookRoutes)
app.use("/api/genre",genreRoutes)

app.listen(5000,()=>{
  console.log("connected")
})




 


