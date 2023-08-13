import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(

        <div>
            <ul className="navbar-ul">
                <li><Link to="/name">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/logout">Log out</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </div>
    )}

 export default Navbar;