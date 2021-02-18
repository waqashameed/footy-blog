import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>This page does not exist.</p>
            <Link to="/">
                Click here to go to homepage...
            </Link>

        </div>
     );
}
 
export default NotFound;