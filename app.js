const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.set('trust proxy', true);

app.use(express.json());
app.use(cors());

app.get('/healthcheck', (req, res) => {
    console.log(req.ip);
    res.status(200).json({ success: true, ip: req.ip });
});

app.post('/zapier', async (req, res) => {

    const { username, password } = req.body;

    const { data } = await axios.post('https://hooks.zapier.com/hooks/catch/5292946/ocfixxv/', {
        username,
        password
    });

    res.json(data);
});


app.listen(3000, () => console.log('listening on port 3000'));