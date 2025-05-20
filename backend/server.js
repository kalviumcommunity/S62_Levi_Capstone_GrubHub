require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const UserRoute = require("./routes/UserRoute.js")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/user', UserRoute);

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Successfully connected to the DB!!"))
.catch((err) => console.log("Error connecting to the DB", err))

app.get('/', (req, res) => {
  res.send("Welcome to GrubHub Backend API ");
});
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`)
})