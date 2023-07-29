import * as React from 'react';
import axios from 'axios';
const CommentCreate = ({postId}) => {

    const [value, setValue] = React.useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const resp = await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content: value
        });
        console.log(resp.data);
        setValue("");
    }

    const changeHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <label> New Comment</label>
                    <input className='form-control' value={value} onChange={changeHandler}/>
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate;