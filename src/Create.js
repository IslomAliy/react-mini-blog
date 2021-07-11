import { useState } from "react";

const Create = () => {
    const [title, SetTitle]= useState('');
    const [body, SetBody]= useState('');
    const [author, SetAuthor] = useState('Falonchi');

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
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
                <button>Add blog</button>

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;