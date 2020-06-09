import knex from 'knex';
import path from 'path';

//Para configurar a conexão do banco de dados 
const connection = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname,'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;

//Migrations = Hístorico do banco de dados
//