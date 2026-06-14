const { Pool } = require('pg');

// Usamos la cadena de conexión desde variables de entorno
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // necesario para Neon Tech
});

module.exports = pool;