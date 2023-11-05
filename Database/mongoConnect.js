// getting-started.js
const mongoose = require('mongoose');
const { config } = require("../privateData")

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://${config.DBUSERNAME}:${config.DBPASSWORD}@cluster0.jktqllf.mongodb.net/PostsDatabase`)
    console.log(config.DBUSERNAME, config.DBPASSWORD)
    console.log("connected")

}

