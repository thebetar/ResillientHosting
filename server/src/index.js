import express from 'express';
import fs from 'fs';

const html = fs.readFileSync('src/index.html', 'utf8');

const app = express();

app.get('/', (req, res) => {
    res.send(html.replace('{{SERVER_NAME}}', process.env.HOSTNAME || 'Server'));
});

app.get('/kill', (req, res) => {
    res.send('Killing the server');

    console.log(`[${process.env.HOSTNAME}] Killing the server`);
    process.exit(1);
});

app.listen(3000, () => {
    console.log(`[${process.env.HOSTNAME}] Server is running on port 3000 🚀`);
});