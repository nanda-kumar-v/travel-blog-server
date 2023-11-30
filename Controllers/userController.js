const users = require('../Models/userSchema')

exports.userRegister = async (req, res) => {
    const { fName, lName, location, email, password, mobile } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("User already exists")
        } else {
            const newUser = new users({
                fName, lName, location, email, password, mobile
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const isUser = await users.findOne({ email })
        if (isUser) {
            if (isUser.password === password) {
                res.status(200).json(isUser)
            } else {
                res.status(406).json("Invalid credentials")
            }
        }
        else {
            res.status(404).json("User Not Found")
        }
    } catch (error) {
        res.status(401).json(error)

    }
}