const express = require("express")
const restaurants = require("./restaurants-model")
const restrict = require("../middleware/restrict")
const { validateRestaurantId } = require("../middleware/validate")

const router = express.Router()

router.get('/', restrict(), (req, res, next) => {
    restaurants.getRestaurants()
    .then(restaurants => {
        res.json(restaurants);
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', (req, res, next) => {
    restaurants.getRestaurantId(req.params.id)
    .then(restaurant => {
        if(restaurant){
            res.json(restaurant)
        }else{
            res.status(401).json({
                message: "Restaurant does not exist"
            })
        }
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', (req, res, next) => {
    restaurants.addRestaurant({...req.body, user_id: req.token.userId})
    .then(restaurant => {
        res.status(201).json(restaurant)
    })
    .catch(err => {
        next(err)
    })
})

router.put('/:id', validateRestaurantId(), (req, res, next) => {
    restaurants.removeRestaurant(req.params.id, req.body)
    .then((restaurant) => {
        res.status(200).json(restaurant)
    })
    .catch(err => {
        next(err)
    })
} )

module.exports = router