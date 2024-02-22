import express from 'express';
import fs from 'fs';

const html = fs.readFileSync('src/index.html', 'utf8');

const app = express();

app.get('/', (req, res) => {
    const counter = fs.readFileSync('data/data.txt', 'utf8');
    fs.writeFileSync('data/data.txt', String(parseInt(counter) + 1));

    res.send(html.replace('{{SERVER_NAME}}', process.env.HOSTNAME || 'Server'));
});

app.get('/kill', (req, res) => {
    res.send('Killing the server');

    console.log(`[${process.env.HOSTNAME}] Killing the server`);
    process.exit(1);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`[${process.env.HOSTNAME}] Server is running on port ${port} 🚀`);
});