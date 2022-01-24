const Sequelize = require('sequelize'); // conexão com o banco de dados

const sequelize = new Sequelize({ // colocando a conexão em uma var
    dialect: 'sqlite', // qual banco vamos utilizar
    storage: './db/app.db' // o storage vai ficar aqui mesmo!!
});

module.exports = sequelize // exportando a conexão do banco de dados, ou seja estamos "apontando" a conexão. Para podermos usar fora do app.js