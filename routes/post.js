const express = require("express")
const { postsModel } = require("../model")

const router = express.Router()

router.get("/", async (req, res) => {
    let data = await postsModel.find({})
    res.json(data)

})

router.post("/", async (req, res) => {
    let post = new postsModel(req.body)
    await post.save()
    res.json(post)
})

module.exports = router