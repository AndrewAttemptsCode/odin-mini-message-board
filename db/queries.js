const pool = require('./pool');

const allMessagesGet = async () => {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY id DESC;');
  return rows;
};

const getDetails = async (messageId) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1;', [messageId]);
  return rows[0];
};

module.exports = { allMessagesGet, getDetails };