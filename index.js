const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

// Initialize Express
var app = express();

app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"))
});

// Set up a static folder (public) for our web app
app.use(express.static("public"));
app.use(express.json({limit: '1mb'}));

app.post('/post', async (request, response) => {
     console.log(request.body.plant);
     const search_plant = request.body.plant;
 })

app.get('/get/:plant', async (request, response) => {
    //const findplant = request.params.plant;
    console.log(request.params);
    const PLANT_API_URL = 'https://trefle.io/api/v1/plants/search?token=' + process.env.API_KEY + 'q=' + request.params.plant;
    const fetch_response = await fetch(PLANT_API_URL);
    const json = await fetch_response.json();
    response.json(json);
})