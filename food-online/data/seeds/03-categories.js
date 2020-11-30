
exports.seed = async function(knex) {
  await knex("categories").insert([
    {name: "breakfast"},
    {name: "lunch"},
    {name: "dinner"},
    {name: "dessert"}
  ])
};
