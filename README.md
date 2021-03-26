# node-bookshelf
Basic CRUD with login, logout feature

## Requirements
  - Node and npm

## Installation 
  1. Clone the repository: `git clone https://github.com/techuz-react-team/node-bookshelf.git` 
  2. Install the application: `npm install`
  3. Rename `.env-example` file to `.env` and configure database environments there
  4. Run `npm install knex -g` to use knex cli
  5. Run `knex migrate:latest` for migration and `knex seed:run` for seeding the data
  6. Start the server: `npm start`
  7. Test API in postman or any other tool with host `http://localhost:3001`