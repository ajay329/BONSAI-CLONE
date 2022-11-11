require("dotenv").config()
const express = require("express");
const PORT =process.env.PORT || 8000;
const userRouter = require("./users/user.router")
const connect = require("./config/db")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home")
})
app.use("/users",userRouter)

app.listen(PORT,async()=>{
    await connect();
    console.log(`Server is running on port http://localhost:${PORT}`);
})
