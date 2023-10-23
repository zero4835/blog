import express from "express";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"

const app = express();

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)


app.get("/test", (req,res)=>{
  res.json("it works!")
})



app.listen(8800, ()=>{
  console.log("Connected!")
})
