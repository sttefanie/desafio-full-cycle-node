const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
    connection.query('INSERT INTO people(name) VALUES("Wesley")', (err) => {
        if (err) throw err;
        connection.query('SELECT * FROM people', (err, results) => {
            if (err) throw err;
            let responseText = '<h1>Full Cycle Rocks!</h1>';
            responseText += '<ul>';
            results.forEach((row) => {
                responseText += `<li>${row.name}</li>`;
            });
            responseText += '</ul>';
            res.send(responseText);
            connection.end();
        });
    });
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});
