require("dotenv").config()
const mongoose = require("mongoose")
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const {MONGODBURI} = process.env

// Create connection
mongoose.connect(MONGODBURI, config)

// DB Events
mongoose.connection
.on("open", () => console.log("You are Connected to Mongo"))
.on("close", () => console.log("Mongo Connection Closed"))
.on("error", (error) => console.log(error))

module.exports = mongoose