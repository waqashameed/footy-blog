import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import ReactLoading from 'react-loading';


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok)
                {
                    throw Error('Could not fetch the data for that reasoucrce');
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message)
            })
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            {isPending && <ReactLoading type='bubbles' color='#f1356d' height={200} width={150} />}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;
