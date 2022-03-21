const express = require('express');
const app = express();

app.get('/api/buba-gump/:move?', (req, res) => {
    let response = 'pong';
    if(req.params.move === 'pong') response = 'ping'  
    res.json({"message": response});
  })

app.listen(3000, () => {
    console.log('Forrest Gump Ping-Pong API 🏓');
})