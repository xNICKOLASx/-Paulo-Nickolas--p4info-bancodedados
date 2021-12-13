exports.up = function(knex) {
    return knex.schema.createTable('TB_PEDIDOS', table => {
        table.increments('id').primary()
        table.string('data_pedido').notNull().unique()
        table.integer('cliente_id').unsigned()
        table.foreign('cliente_id').references('TB_CLIENTE.id')
    }).then(function () {
        return knex('TB_PEDIDOS').insert([
            { data_pedido: '10/02/2021', cliente_id: '1' },
            { data_pedido: '20/05/2021', cliente_id: '2' },
        ])
    })
};

exports.down = function(knex) {
  
};
