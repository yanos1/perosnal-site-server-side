// getting-started.js
const mongoose = require('mongoose');
const { config } = require("../privateData")

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/PostsDatabase")  //removed /PostsDatabase
    }
    catch (err) {
        console.log("ERROR")
    }
    console.log(config.DBUSERNAME, config.DBPASSWORD)
    console.log("connected")

}


