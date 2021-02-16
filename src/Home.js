import BlogList from './BlogList';
import ReactLoading from 'react-loading';
import useFetch from './useFetch';


const Home = () => {
    const {data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            {isPending && <ReactLoading type='bubbles' color='#f1356d' height={200} width={150} />}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;
