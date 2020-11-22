
exports.seed = async function(knex) {
  await knex("menu").insert([
    {
      dish: "1",
      price: "$1",
      description:"word",
      restaurants_id: 1,
      category_id: 1
    },
    {
      dish: "2",
      price: "$2",
      description:"word",
      restaurants_id: 1,
      category_id: 1
    },
    {
      dish: "3",
      price: "$1",
      description:"word",
      restaurants_id: 1,
      category_id: 1
    },
    {
      dish: "4",
      price: "$1",
      description:"word",
      restaurants_id: 2,
      category_id: 1
    },
    {
      dish: "5",
      price: "$1",
      description:"word",
      restaurants_id: 2,
      category_id: 1
    },
    {
      dish: "6",
      price: "$1",
      description:"word",
      restaurants_id: 2,
      category_id: 1
    },
    {
      dish: "7",
      price: "$1",
      description:"",
      restaurants_id: 3,
      category_id: 1
    },
    {
      dish: "8",
      price: "$1",
      description:"word",
      restaurants_id: 3,
      category_id: 1
    },
    {
      dish: "9",
      price: "$1",
      description:"word",
      restaurants_id: 3,
      category_id: 1
    },
    
  ])
  
  
};
