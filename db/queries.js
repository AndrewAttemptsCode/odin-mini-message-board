const pool = require('./pool');

const allMessagesGet = async () => {
  const { rows } = await pool.query('SELECT * FROM messages;');
  return rows;
};

module.exports = { allMessagesGet };