exports.up = function(knex) {
    return knex.schema.createTable('TB_PRODUTO', table => {
        table.increments('id').primary()
        table.string('descrição').notNull()
        table.real('preço').notNull()
        }).then(function () {
        return knex('TB_PRODUTO').insert([
            { descrição: 'Arroz', preço: 5.54 },
            { descrição: 'Feijão', preço: 8.90},
            { descrição:'Macarrão' , preço: 6.00 },
            { descrição: 'Óleo de Soja', preço:5.00 }
        ])
    })
};

exports.down = function(knex) {
  
};
