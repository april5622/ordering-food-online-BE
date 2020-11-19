
exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.text("firstname").notNull()
        table.text("lastname").notNull()
        table.text("email").notNull().unique()
        table.text("username").notNull().unique()
        table.text("password").notNull()
    })  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users")
};
