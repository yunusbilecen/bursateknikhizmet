// utils/database.js
const { Pool } = require('pg');
require('dotenv').config();

console.log("PostgreSQL URL:", process.env.POSTGRES_URL);
try {
    new URL(process.env.POSTGRES_URL);
} catch (error) {
    console.error('Invalid PostgreSQL URL:', error.message);
    // Devam etmeyi durdurma, uygulama hala çalışır
}

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

// Bağlantıyı test etmek için kullanabilirsiniz
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err);
        return;
    }

    console.log('Connected to PostgreSQL successfully!');
    release(); // Bağlantıyı serbest bırak
});

module.exports = pool;
