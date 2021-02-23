# ordering-food-online-BE
A little RESTful API for the my front-end application called ordering-food-online.

## Motivation
For my first solo full-stack application, I created a food ordering app like doordash to build up my skills as a developer and hopefully can make the real deal one day. 

## Build status
Build status of continus integration i.e. travis, appveyor etc. Ex. - 

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)

## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Project
You can find the deployed project [here](https://food-online-be.herokuapp.com/)

## Tech/framework used

<b>Built with</b>
- [Node.js](https://nodejs.org/en/)
- [express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Features

## Frontend Github Repo
https://github.com/april5622/ordering-food-online

## Setup postgres

There are 3 options to get postgresql installed locally [Choose one]:

1. Use docker. [Install](https://docs.docker.com/get-docker/) for your platform
   - run: `docker-compose up -d` to start up the postgresql database and pgadmin.
   - Open a browser to [pgadmin](http://localhost:5050/) and you should see the Dev server already defined.
   - If you need to start over you will need to delete the folder `$ rm -rf ./data/pg` as this is where all of the server data is stored.
     - if the database `api-dev` was not created then start over.
2. Download and install postgresql directly from the [main site](https://www.postgresql.org/download/)
   - make note of the port, username and password you use to setup the database.
   - Connect your client to the server manually using the values previously mentioned
   - You will need to create a database manually using a client.
   - Make sure to update the DATABASE_URL connection string with the values for username/password, databasename and server port (if not 5432).
3. Setup a free account at [ElephantSQL](https://www.elephantsql.com/plans.html)
   - Sign up for a free `Tiney Turtle` plan
   - copy the URL to the DATABASE_URL .env variable
   - make sure to add `?ssl=true` to the end of this url

## Application Setup
- create your project repo by forking or using this as a template.
- run: `npm install` to download all dependencies.
- confirm correct env variables in your `.env` file.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

### Enviornment Variables
- `PORT` - API port (optional, but helpful with FE running as well)
    - 3000
    - 8000
    - 8080
- `DB_URL` - postgres://mdahxmqa:McezTD6XRreEZP_LR3VytvA5RR-5jgrS@ruby.db.elephantsql.com:5432/mdahxmqa
- `NODE_ENV` - production
- `JWT_SECRET`- a string of your choosing

## Tests
Describe and show how to run the tests with code examples.

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Contribute
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated.**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Credits
Credit goes to Strapi's blog article, [Create a food ordering app with Strapi and Next.js](https://strapi.io/blog/nextjs-react-hooks-strapi-food-app-1) for inspiring me to make my own.

Nguyễn Thanh Hòa for his post on [Building a Shopping Cart with React Redux](https://dev.to/skipperhoa/build-a-shopping-cart-with-react-redux-1n97).

## License

MIT © [April Ma](https://aprilma.com/)
