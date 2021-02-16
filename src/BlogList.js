const BlogList = ({ blogs, handleDelete }) => {
    
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Posted by: {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Post</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList
;