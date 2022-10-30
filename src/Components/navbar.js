import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className ="navbar">
            <h2>Students</h2>
            <div className = "links">
                <Link to = "/">Login</Link>
                <Link to = "/signup">Sign up</Link>
            </div>        
        </nav>
    );
} ;

export default Navbar;