
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
  
};
/**
 * O metodo .down representa o que será feito se alguma coisa der errado
 * 
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
      
};
