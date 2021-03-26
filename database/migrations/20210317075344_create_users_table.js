
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments().unsigned().primary();
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
      table.text('token').nullable();
      table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
