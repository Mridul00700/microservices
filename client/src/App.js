import * as React from 'react';
import PostCreate from './postcreate';
import PostList from './postList';

const App = () => {
return (<div className='container'>
    <h1>Create Post</h1>
    <PostCreate/>
    <h1>Post List</h1>
    <PostList/>
    </div>);
}

export default App;