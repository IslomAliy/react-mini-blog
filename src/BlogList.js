const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} 
        </div>
     );
}
 
export default BlogList;

// { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
// { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
// { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }