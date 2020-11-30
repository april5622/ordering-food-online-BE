
exports.seed = async function(knex) {
  await knex("menu").insert([
    {
      restaurants_id: 3,
      category_id: 1,
      dish: "one",
      price: "$1",
      description:"word",
    },
    {
      restaurants_id: 2,
      category_id: 1,
      dish: "two",
      price: "$2",
      description:"word",
      
    },
    {
      restaurants_id: 3,
      category_id: 1,
      dish: "three",
      price: "$1",
      description:"word",
      
    },
    {
      restaurants_id: 3,
      category_id: 1,
      dish: "four",
      price: "$1",
      description:"word",
      
    },
    {
      restaurants_id: 3,
      category_id: 1,
      dish: "five",
      price: "$1",
      description:"word",
      
    },
    {
      restaurants_id: 2,
      category_id: 1,
      dish: "six",
      price: "$1",
      description:"word",
      
    },
    {
      restaurants_id: 2,
      category_id: 1,
      dish: "seven",
      price: "$1",
      description:"",
      
    },
    {
      restaurants_id: 3,
      category_id: 1,
      dish: "eight",
      price: "$1",
      description:"word",
      
    },
    {
      restaurants_id: 3,
      category_id: 1,
      dish: "nine",
      price: "$1",
      description:"word",
      
    },
    
  ])
  
  
};
