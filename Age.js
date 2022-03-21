const express = require('express');
const app = express();

app.get('/api/age/:name?', (req, res) => {
    let response = { "error": "Missing parameter 'name' was expected." };
    
    if(req.params.name){
        let age = Math.floor(Math.random() * 101);

        response = {
            "name": req.params.name,
            "age": age,
            "days": age * 365
        };
    }
    
    res.json(response);

  })

app.listen(3000, () => {
    console.log('Age Prediction API 👶-👴');
})