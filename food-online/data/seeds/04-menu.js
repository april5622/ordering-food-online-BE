
exports.seed = async function(knex) {
  await knex("menu").insert([
    {
      restaurants_id: 1,
      category_id: 3,
      dish: "Fried Chicken & Fries",
      price: "$10",
      description:"Topped with a chili like paprika, or hot sauce to give it a spicy taste.",
    },
    {
      restaurants_id: 1,
      category_id: 3,
      dish: "Honey BBQ Chicken Wings & Fries",
      price: "$12",
      description:"Baked instead of fried these classic chicken wings are crispy, tender and smothered in a sweet ‘n spicy Honey BBQ Sauce! ",
      
    },
    {
      restaurants_id: 1,
      category_id: 2,
      dish: "Chicken Sandwich",
      price: "$10",
      description:"Our Fried Chicken Between Two Honey-Buttered Buns, The New Chicken Sandwich Is Calling You. ",
      
    },
    {
      restaurants_id: 2,
      category_id: 3,
      dish: "Premium Nigiri Sushi",
      price: "$40",
      description:"8pcs + 1roll",
      
    },
    {
      restaurants_id: 2,
      category_id: 3,
      dish: "Premium Chirashi bowl",
      price: "$40",
      description:"Maguro, Salmon, Hamachi, Hotate, Ikura, Uni, Sweet shrimp, Snow Crab & Unagi  **under this circumstance, fish may change vary.",
      
    },
    {
      restaurants_id: 2,
      category_id: 3,
      dish: "Maguro Salmon Hamachi bowl ",
      price: "$35",
      description: " ",
      
    },
    {
      restaurants_id: 3,
      category_id: 3,
      dish: "Bone-In Natural Cut Ribeye",
      price: "$45",
      description: "Bone-in and extra marbled for maximum tenderness. Seasoned and flame grilled.",
      
    },
    {
      restaurants_id: 3,
      category_id: 3,
      dish: "Victoria's Filet Mignon",
      price: "$45",
      description:"The most tender and juicy thick cut seasoned and seared.",
      
    },
    {
      restaurants_id: 3,
      category_id: 3,
      dish: "Baby Back Ribs",
      price: "$25",
      description:"Smoked, grilled and brushed with a tangy BBQ sauce. Aussie Fries. Available in 1/2 and full order.",
      
    },
    
  ])
  
  
};
