const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();

app.use(bodyParser.json());


const events = [];

app.post('/events', (req, res)=> {
    const event = req.body;

    events.push(event);

    axios.post('http://post-clusterip-srv:4000/events', event).catch((error)=>{
        console.log(error);
    });
    // axios.post('http://localhost:4001/events', event).catch((error)=>{
    //     console.log(error);
    // });
    // axios.post('http://localhost:4002/events', event).catch((error)=>{
    //     console.log(error);
    // });
    // axios.post('http://localhost:4003/events', event).catch((error)=>{
    //     console.log(error)
    // });

    res.send({send: 'ok'});
});


app.get('/events', (req,res)=> {
    res.send(events);
});

app.listen(4005, ()=> {
    console.log("Listening to 4005...");
})