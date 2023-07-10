import {  Link } from "react-router-dom";
function Nav(){
    return (
        <>
        
        <nav>
                <ul>
                    <li style={{ display: "inline-block", margin: "0 10px" }}>
                        <Link to="/" className="nav-item" style={{ color: "black", textDecoration: "none", fontFamily: "Karla", fontSize: "20px", fontWeight: "bold" }}>Home</Link>
                    </li>
                    <li style={{ display: "inline-block", margin: "0 10px" }}>
                        <Link to="/about" className="nav-item" style={{ color: "black", textDecoration: "none", fontFamily: "Karla", fontSize: "20px", fontWeight: "bold" }}>About</Link>
                    </li>
                    <li style={{ display: "inline-block", margin: "0 10px" }}>
                        <Link to="/menu" className="nav-item" style={{ color: "black", textDecoration: "none", fontFamily: "Karla", fontSize: "20px", fontWeight: "bold" }}>Menu</Link>
                    </li>
                    <li style={{ display: "inline-block", margin: "0 10px" }}>
                        <Link to="/booking" className="nav-item" style={{ color: "black", textDecoration: "none", fontFamily: "Karla", fontSize: "20px", fontWeight: "bold" }}>Reservations</Link>
                    </li>
                    <li style={{ display: "inline-block", margin: "0 10px" }}>
                        <Link to="/order" className="nav-item" style={{ color: "black", textDecoration: "none", fontFamily: "Karla", fontSize: "20px", fontWeight: "bold" }}>Order Online</Link>
                    </li>
                    <li style={{ display: "inline-block", margin: "0 10px" }}>
                        <Link to="/login" className="nav-item" style={{ color: "black", textDecoration: "none", fontFamily: "Karla", fontSize: "20px", fontWeight: "bold" }}>Log In</Link>
                    </li>
                </ul>
            </nav></>
    )
}

export default Nav;