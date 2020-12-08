const restaurant= require("../restaurants/restaurants-model")
const menu = require("../menu/menu-model")
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

function validateRestaurantId() {
    return(req, res, next) => {
        restaurant.getRestaurantId(req.params.id)
        .then((restaurant) => {
            if(restaurant){
                req.restaurant = restaurant
                next()
            } else {
                res.status(400).json({
                    message: "Invalid Restaurant ID"
                })
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

function validateMenuId() {
    return(req, res, next) => {
        menu.getMenuId(req.params.id)
        .then((menu) => {
            if(menu){
                req.menu = menu
                next()
            } else {
                res.status(400).json({
                    message: "Invalid Menu ID"
                })
            }
        })
        .catch(err => {
            next(err)
        })

    }
}

module.exports = {
    validateUser,
    validateUserId,
    validateRestaurantId,
    validateMenuId
}