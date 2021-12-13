exports.up = function(knex) {
    return knex.schema.createTable('TB_PEDIDO_PRODUTO', table => {
        table.increments('id')
        table.integer('pedido_id').unsigned()
        table.integer('produto_id').unsigned()
        table.integer('quantidade').notNull()
        table.string('valor_item')
        table.foreign('pedido_id').references('TB_PEDIDOS.id')
        table.foreign('produto_id').references('TB_PRODUTO.id')
        
    })


    };

exports.down = function(knex) {
  
};
