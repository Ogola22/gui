import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>STUDENTS</h2>
            <div className="links">
            
                {/*<a href="/">Home</a>
                <a href="/create">New Blog</a>*/}
                <Link to="/Signup">Signup</Link>
                <Link to="/Login">Login</Link>
            </div>
        </nav> 
     );
}
 
export default Navbar;