import {Sequelize} from 'sequelize';

const db = new Sequelize('db_posts', 'root', '',{
    host:'localhost',
    dialect:'mysql'
});

export default db