
exports.seed = async function(knex) {
  await knex("restaurants").insert([
    {
      name: "Chicken in a Box",
      description: "fried chicken and more"
    },
    {
      name: "Dashi",
      description: "Japanese dishes and sushi"
    },
    {
      name: "Jimmy's Steakhouse",
      description: "prime ribs and lamb chop"
    },


  ])  
};
