const postsR = require("./post")

exports.routesInit = (app) => {
    app.use("/post", postsR);

}