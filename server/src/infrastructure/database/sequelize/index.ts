import { Sequelize } from 'sequelize';
import {dbConfig} from "../db.js";

const sequelize = new Sequelize({
    database: dbConfig.database,
    username: dbConfig.user,
    password: dbConfig.password,
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'postgres',
    define: {
        timestamps: false,
    },
});

const db = {
    Sequelize,
    sequelize,
};
export default db;