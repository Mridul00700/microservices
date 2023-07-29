import * as React from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [value, setValue] = React.useState("");


    const inputHandler = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if(value){
            try{
            const resp = await axios.post('http://localhost:4000/posts', {
                title: value
            });
            console.log("reponse >>", resp)
        }catch(error){
            console.log(error);
        }
        }
        setValue("");
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input className='form-control' value={value} onChange={inputHandler} />
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate;