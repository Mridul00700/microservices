const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};


const handleEvent = (type, data) => {
    if(type=== 'PostCreated'){

        const {id, title} = data;
        posts[id] = {
            id, title, comments: []
        };

    }

    if(type==='CommentCreated'){

        const {id, content, postId, status} = data;
        const post = posts[postId];

        post.comments.push({id, content, status});

    }

    if(type === 'CommentUpdated'){
        const {id, postId, status, content} = data;

        const post = posts[postId];

        const comment = post.comments.find(com => {
            return com.id === id
        });

        comment.status = status;
        comment.content = content;

    }
}

/*

posts = {
    'jsdjs22' : {
        id: 'jsdjs22',
        title: 'post title',
        comments: [
            {id: 'kwdk31', content: 'comments!'},
            ...
        ]
    },
    ...
}
*/


app.get('/posts', (req,res)=>{
    res.send(posts);
});


app.post('/events', (req,res)=>{

    const {type, data} = req.body;
    
    handleEvent(type, data);

    // console.log(posts);
    res.send({});

});


app.listen(4002, async()=>{
    console.log("listening at 4002...");
try{
   const events = await axios.get('http://localhost:4005/events');

   for(let event of events.data) {
    console.log("Processing events!", event.type);
    handleEvent(event.type,event.data);
   }

}catch (error){
    console.log(error);
}

});