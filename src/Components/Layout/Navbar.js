import React from "react";
import { Link } from 'react-router-dom'
import SingedInLinks from "./SignedInLinks";
import SingedOutLinks from "./SignedOutLinks";

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                    Mario
                </Link>
                <SingedInLinks />
                <SingedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar