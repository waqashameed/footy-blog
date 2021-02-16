import {useState, useEffect} from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log("hello.")
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;
