const pool = require('./pool');

const allMessagesGet = async () => {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY id DESC;');
  return rows;
};

const getDetails = async (messageId) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1;', [messageId]);
  return rows[0];
};

const messagePost = async (name, message) => {
  await pool.query('INSERT INTO messages (name, message) VALUES ($1, $2);', [name, message]);
}

module.exports = { allMessagesGet, getDetails, messagePost };