
exports.seed = async function(knex) {
  await knex("menu").insert([
    {
      restaurants_id: 1,
      category_id: 3,
      dish: "Fried Chicken & Fries",
      price: "$10",
      description:"Topped with a chili like paprika, or hot sauce to give it a spicy taste.",
      photo: "https://recipes.net/wp-content/uploads/2020/03/Clucks-And-Fries-Better-Than-Red-Robin-Recipe.jpg",
    },
    {
      restaurants_id: 1,
      category_id: 3,
      dish: "Honey BBQ Chicken Wings & Fries",
      price: "$12",
      description:"Baked instead of fried these classic chicken wings are crispy, tender and smothered in a sweet ‘n spicy Honey BBQ Sauce! ",
      photo: "https://i.pinimg.com/736x/95/52/03/95520378621205dabd3d487f8f17aa8c.jpg",
    },
    {
      restaurants_id: 1,
      category_id: 2,
      dish: "Chicken Sandwich",
      price: "$10",
      description:"Our Fried Chicken Between Two Honey-Buttered Buns, The New Chicken Sandwich Is Calling You. ",
      photo: "https://easychickenrecipes.com/wp-content/uploads/2019/06/fried-chicken-sandwich-4-of-7.jpg",
    },
    {
      restaurants_id: 2,
      category_id: 3,
      dish: "Premium Nigiri Sushi",
      price: "$40",
      description:"8pcs + 1roll",
      photo: "https://s3-media0.fl.yelpcdn.com/bphoto/7SKgXg8Tmn7TOtY9FsFrEA/o.jpg",
    },
    {
      restaurants_id: 2,
      category_id: 3,
      dish: "Premium Chirashi bowl",
      price: "$40",
      description:"Maguro, Salmon, Hamachi, Hotate, Ikura, Uni, Sweet shrimp, Snow Crab & Unagi  **under this circumstance, fish may change vary.",
      photo: "https://s3-media0.fl.yelpcdn.com/bphoto/1ihVuTuExtfaVdqkhnMbKQ/o.jpg",
    },
    {
      restaurants_id: 2,
      category_id: 3,
      dish: "Maguro Salmon Hamachi bowl ",
      price: "$35",
      description: "Maguro, Salmon, Hamachi, Tuna",
      photo: "https://s3-media0.fl.yelpcdn.com/bphoto/WnkPf0QHI2y3Bg8tfMFs_A/o.jpg",
    },
    {
      restaurants_id: 3,
      category_id: 3,
      dish: "Bone-In Natural Cut Ribeye",
      price: "$45",
      description: "Bone-in and extra marbled for maximum tenderness. Seasoned and flame grilled.",
      photo: "https://pbs.twimg.com/media/CjAkS6VW0AIV-04.jpg",
    },
    {
      restaurants_id: 3,
      category_id: 3,
      dish: "Victoria's Filet Mignon",
      price: "$45",
      description:"The most tender and juicy thick cut seasoned and seared.",
      photo: "https://www.chewboom.com/wp-content/uploads/2017/02/Steak-And-Lobster-Is-Back-At-Outback-Steakhouse.jpg",
    },
    {
      restaurants_id: 3,
      category_id: 3,
      dish: "Baby Back Ribs",
      price: "$25",
      description:"Smoked, grilled and brushed with a tangy BBQ sauce. Aussie Fries. Available in 1/2 and full order.",
      photo: "https://i.pinimg.com/originals/46/82/2b/46822ba11d7d3a2ac96bbc2c486759ca.jpg",
    },
    
  ])
  
  
};
