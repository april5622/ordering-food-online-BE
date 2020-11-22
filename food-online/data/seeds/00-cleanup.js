
exports.seed = async function(knex) {
  await knex("menu").truncate()
  await knex("categories").delete()
  await knex("restaurants").delete()
  await knex("users").truncate()
};
