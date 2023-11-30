const express = require('express')

const userController = require('../Controllers/userController')
const postController = require("../Controllers/postController")
const multerMiddleware = require("../Middlewares/multerMiddleware")

const router = new express.Router()

router.post("/user-register",userController.userRegister)

router.post("/user-login",userController.userLogin)

router.post("/add-post",multerMiddleware.single("image"),postController.addPost)

router.get("/get-posts",postController.getAllPosts)

router.delete("/delete-post/:id",postController.deletePost)

module.exports = router