import * as React from 'react';
import axios from 'axios';
import CommentCreate from './commentCreate';
import CommentList from './commentList';


const PostList = () => {

    const [posts, setPosts] = React.useState({});

    React.useEffect(()=> {

        const getPostList = async () => {

            try{
            const result =  await axios.get('http://localhost:4002/posts');
            setPosts(result.data);
            } catch(error){
                console.log(error);
            }


        }   
        getPostList();

    },[]);
    // console.log(posts);

    const renderPost = Object.values(posts);


return (<div  className='d-flex flex-row flex-wrap justify-content-between'>{
    renderPost.map(post => {
        return (
            <div className='card' style={{width: "30%", marginBottom: "20px"}} key={post.id}><div className='card-body'><h3>{post.title}</h3>
            <CommentList comments={post.comments}/>
            <CommentCreate postId={post.id}/>
            </div>
            </div>
           
        )
    })}</div>)
}

export default PostList;