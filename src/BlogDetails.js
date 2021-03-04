import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ReactLoading from 'react-loading';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('https://my-json-server.typicode.com/waqashameed/footy-blog-json/blogs/' + id);
    const history = useHistory();
    
    const handleClick = () => {
        fetch('https://my-json-server.typicode.com/waqashameed/footy-blog-json/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <ReactLoading type='bubbles' color='#f1356d' height={200} width={150} />}
            { error && <div> { error } </div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;