const express = require('express');
const app = express();

app.get('/api/delay/:delay?', (req, res) => {
    let time = 1000;
    if(req.params.delay) time = req.params.delay;

    setTimeout(() => {
        res.json({"message": `Responding after ${time} milliseconds`});
    }, time)
    
  })

app.listen(3000, () => {
    console.log('Delayed Response API ⏳');
})