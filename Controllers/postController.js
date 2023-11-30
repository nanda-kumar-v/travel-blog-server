const posts = require('../Models/postSchema')


exports.addPost = async (req, res) => {
    const { Uname, location, description } = req.body
    try {
        const newPost = new posts({
            image: req.file.filename, Uname, location, description
        })
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getAllPosts = async (req, res) => {
    const searchKey = req.query.searchKey
    const query = {
        location: { $regex: searchKey, $options: "i" }
    }
    console.log(searchKey, query);
    try {
        const response = await posts.find(query)
        res.status(200).json(response)
    } catch (error) {

        res.status(401).json(error)
    }
}

exports.deletePost = async (req, res) => {
    const { id } = req.params
    try {
        await posts.findByIdAndDelete({ _id: id })
        res.status(200).json("Blog Deleted !!!")
    } catch (error) {
        res.status(401).json(error)

    }
}