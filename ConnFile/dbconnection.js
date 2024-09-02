import mysql from 'mysql2';

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CredConnect'
  });

export default conn;