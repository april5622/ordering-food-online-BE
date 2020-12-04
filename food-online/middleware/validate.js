const users = require("../users/users-model")

function validateUserId(){
    return(req, res, next) => {
        users.findById(req.params.id)
        .then((user) => {
            if(user){
                req.user = user
                next()
            } else {
                res.status(400).json({
                    message: "Invalid user id"
                })
            }
        })
        .catch((err) => {
            next(err)
        })
    }
}

function validateUser(){
    return (req, res, next) => {
        if(!req.body.name){
            return res.status(400).json({
                message: "Missing Required Name Field"
            })
        }
        users.add(!req.body)
        .then((user) => {
            res.status(201).json(user)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({
                message: "Missing User Data"
            })
        })
        next();
    }
}

module.exports = {
    validateUser,
    validateUserId
}