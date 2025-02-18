const pool = require('./pool');

const allMessagesGet = async () => {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY id DESC;');
  return rows;
};

module.exports = { allMessagesGet };