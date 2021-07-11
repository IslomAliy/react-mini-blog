import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, SetTitle]= useState('');
    const [body, SetBody]= useState('');
    const [author, SetAuthor] = useState('Falonchi');
    const [isPending, SetIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        SetIsPending(true);

        fetch('http://localhost:3000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            SetIsPending(false);
            // history.go(-1);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                  type="text" 
                  required
                  value={title}
                  onChange={(e) => SetTitle(e.target.value)}
                />
                <label>Blog body: </label>
                <textarea 
                  required
                  value={body}
                  onChange={(e) => SetBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => SetAuthor(e.target.value)}
                >
                    <option value="Falonchi">Falonchi</option>
                    <option value="Fistonchi">Fistonchi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;