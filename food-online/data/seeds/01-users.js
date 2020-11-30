
exports.seed = async function(knex) {
  await knex("users").insert([
    {firstname: "testuser1",
     lastname: "testuser1last",
     email: "testuser1@gmail.com",
     username: "testuser1",
     password: "password1"
    },
    {firstname: "testuser2",
     lastname: "testuser2last",
     email: "testuser2@gmail.com",
     username: "testuser2",
     password: "password2"
    }
 ])
};
