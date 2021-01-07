exports.seed = async function(knex) {
  await knex("restaurants").insert([
    {
      name: "Chicken in a Box",
      description: "fried chicken and more",
      photo: "https://img.taste.com.au/V1mpwu4z/taste/2016/11/sharon-108893-2.jpeg"
    },
    {
      name: "Dashi",
      description: "Japanese dishes and sushi",
      photo: "https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/038/512/original/_MG_9099_ss.jpg?2018&d=750x400"
    },
    {
      name: "Jimmy's Steakhouse",
      description: "prime ribs and lamb chop",
      photo: "https://cdn.vox-cdn.com/thumbor/n91ZKur0SFdEDdSiIF4bB4ub74Q=/0x0:2048x1367/1200x675/filters:focal(861x521:1187x847)/cdn.vox-cdn.com/uploads/chorus_image/image/62658778/Steakhouse316_001.0.jpg"
    },


  ])  
};
