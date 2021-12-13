exports.up = function(knex) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        }).then(function () {
        return knex('TB_CLIENTE').insert([
            { nome: 'José' },
            { nome: 'Maria' },
            { nome:"João"  },
            { nome: "Ana"  }
        ])
    })
};

exports.down = function(knex) {
  
};
