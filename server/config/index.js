import mysql from "mysql";

const connection = mysql.createConnection({
    host: "",
    port : ,
    user : "",
    password : "",
    database : "",
});

connection.connect();

export default connection;