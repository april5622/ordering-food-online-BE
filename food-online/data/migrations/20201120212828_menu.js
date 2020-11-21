
exports.up = async function(knex) {
    await knex.schema.createTable("menu", (table) => {
        table.increments("id")
        table.text("dish").notNull()
        table.string("price").notNull()
        table.text("description").notNull()
        table.integer("restaurants_id")
            .references("id")
            .inTable("restaurants")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("category_id")
            .references("id")
            .inTable("categories")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
       
    })  
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("menu")  
  
};
