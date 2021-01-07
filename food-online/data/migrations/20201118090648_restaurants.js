
exports.up = async function(knex) {
    await knex.schema.createTable("restaurants", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description").notNull()
        table.text("photo")
        
  
    })  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("restaurants")  
};
