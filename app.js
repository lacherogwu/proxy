const express = require('express');

const app = express();


app.get('/healthcheck', (req, res) => {
    console.log(req.ip);
    res.status(200).json({ success: true });
});


app.listen(3000, () => console.log('listening on port 3000'));