require('dotenv').config();
const { Client } = require('pg');

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  message TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO messages (name, message)
  VALUES
    ('Andrew', 'Yep, this is a message board.'),
    ('Chris', 'Wow, nice'),
    ('Kat', 'Pretty cool'),
    ('Laura', 'Sweet');
`;

const main = async () => {
  console.log('Seeding...');
  const env = process.argv[2] || 'dev';
  const dbURL = 
    env === 'prod'
    ? process.env.PROD_DATABASE_URL
    : process.env.DEV_DATABASE_URL

  const client = new Client({
    connectionString: dbURL
  })

  await client.connect();
  await client.query(SQL);
  console.log('Completed');
  await client.end();
}

main();