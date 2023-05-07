import React from "react"
import { Link } from "react-router-dom";

const Navbar =() => {
    return (
        <nav>
            <div
                style={{
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
                >
                <Link to="/"> Home</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about"> About</Link>
                <Link to="/profile"> Profile</Link>
                <Link to="/services"> Services</Link>
            </div>
        </nav>
    );
};
export default Navbar;