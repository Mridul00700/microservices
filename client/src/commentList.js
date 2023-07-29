import * as React from 'react';
import axios from 'axios';


const CommentList = (props) => {
    // const [value, setValue] = React.useState([]);

    // const getComments = async() => {
    //     const resp = await axios.get(`http://localhost:4001/posts/${props.postId}/comments`);
    //     console.log(resp);
    //     setValue(resp.data);
    // }   

    // React.useEffect(()=>{
    //     getComments();
    // },[]);


return <ul>
    {props.comments.map(val=> {
    let content;

    if(val.status === 'approved'){
        content = val.content;
    }else if(val.status === 'pending'){
        content = 'pending moderation'
    }else if(val.status === 'rejected'){
        content = 'Comment sensored!'
    }

    return (<li key={val.id}>
        {content}
    </li>)})}
</ul>

}

export default CommentList;