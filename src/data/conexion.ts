import { Pool, PoolConfig } from 'pg';

const pgConfig: PoolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_INSTANCE
};

const pool = new Pool(pgConfig);

export default pool;