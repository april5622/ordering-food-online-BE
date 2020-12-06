const db = require("../db");

function getMenu() {
    return db("menu")
    .join(
        'restaurants',
        'restaurants.id', 
        'menu.restaurants_id',
        'categories',
        'categories.id',
        'menu.category_id'
     )
    .select(
        'menu.*',
        'restaurants.name as restaurant',
        'categories.name as category'
    )

}

function getMenuId(id){
    return db('menu')
    .where({id})
    .first()
}

async function addMenu(menu){
    const restaurants_id = await db('restaurants')
        .where({ name: menu.restaurant.toLowerCase()})
        .select("id")
        .first()
    const category_id = await db('categories')
        .where({ name: menu.category.toLowerCase()})
        .select("id")
        .first()
    if (menu.restaurant, menu.category_id) delete (menu.restaurant, menu.category)
    return db('menu')
        .insert({...menu, restaurants_id, category_id})
        .then((ids) => {
            return getMenuId(ids[0])
        })
}

function updateMenu(id, changes){
    if(menu.id) delete menu.id
    return db('menu')
    .where({id})
    .update(changes)
}

function removeMenu(id){
    if(menu.id) delete menu.id
    return db('menu')
    .where('id', id)
    .del()
}

module.exports = {
    getMenu,
    getMenuId,
    addMenu,
    updateMenu,
    removeMenu
}