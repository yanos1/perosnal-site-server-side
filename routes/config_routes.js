const postsR = require("../public/post")

exports.routesInit = (app) => {
    app.use("/", postsR);

}