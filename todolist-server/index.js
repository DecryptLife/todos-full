const express = require('express')
const dotenv = require("dotenv")
const todoRoutes = require("./routes/todoRoutes")
const authRoutes = require("./routes/authRoutes")
const app = express()
const port = 8000

dotenv.config()

app.use(express.json())
app.use("/todos",todoRoutes)
app.use("/auth", authRoutes)
app.get("/", (req,res) => {
    res.send("hello")
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})