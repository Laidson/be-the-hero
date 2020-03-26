
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        /**Agora criar o 'relacionamento' com o 'id' */
        table.string('ong_id').notNullable();

        /**Criar a 'cahve estrangeira' - Chave Primaria
         * toda vez que essa 'ong_id' estiver preenchido 
         * ele precisa ser 'id' que esteja cadastrado na tabela ong 
         */
        table.foreign('ong_id').references('id').inTable('ongs');
        
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incident'); 
};
