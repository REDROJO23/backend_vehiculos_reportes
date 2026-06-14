const pool = require('../db');

const Reports = {
  async getAll() {
    const res = await pool.query('SELECT * FROM reports ORDER BY id ASC');
    return res.rows;
  },

  async insert(report) {
    const { no_econ, usuario, destino, salida, entrada, fecha } = report;
    const res = await pool.query(
      'INSERT INTO reports (no_econ, usuario, destino, salida, entrada, fecha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [no_econ, usuario, destino, salida, entrada, fecha]
    );
    return res.rows[0];
  },

  async update(id, report) {
    const { no_econ, usuario, destino, salida, entrada, fecha } = report;
    const res = await pool.query(
      'UPDATE reports SET no_econ=$1, usuario=$2, destino=$3, salida=$4, entrada=$5, fecha=$6 WHERE id=$7 RETURNING *',
      [no_econ, usuario, destino, salida, entrada, fecha, id]
    );
    return res.rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM reports WHERE id=$1', [id]);
  }
};

module.exports = Reports;