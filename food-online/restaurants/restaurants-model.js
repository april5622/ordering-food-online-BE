const db = require("../data/db");

function getRestaurants(){
    return db('restaurants')
}

function getRestaurantId(id){
    return db('restaurants')
    .where({id})
    .first()
}

async function addRestaurant(restaurant){
    return db('restaurants')
    .insert(restaurant)
    .then(ids => {
        return getRestaurantId(ids[0])
    })
}

function updateRestaurant(id, changes){
    if(restaurant.id) delete restaurant.id
    return db('restaurants')
    .where({id})
    .update(changes)
}

function removeRestaurant(id) {
    if(restaurant.id) delete restaurant.id
    return db('restaurants')
    .where('id', id)
    .del()
}

module.exports = {
    getRestaurants,
    getRestaurantId,
    addRestaurant,
    updateRestaurant,
    removeRestaurant
}