
function Footer(){
    return (
    <footer style={{display:"flex", justifyContent:"space-between", margin:"5px 15%", flexWrap:"wrap"}}>
        <img src="./Logo.svg" alt="logo" width="100%" style={{flex:"1"}}></img>
        <nav style={{flex:"1"}}>
            <ul style={{listStyle:"none"}}>
                <li style={{fontWeight:"bold",fontFamily:"Karla", color:"#495E57"}}>
                   Doormat Navigation
                </li>
                <li><p></p></li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Home</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>About</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Menu</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Reservations</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Order Online</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Log In</a>
                </li>
            </ul>
        </nav>
        <nav style={{flex:"1"}}>
            <ul style={{listStyle:"none"}}>
                <li style={{fontWeight:"bold",fontFamily:"Karla", color:"#495E57"}}>
                   Contact
                </li>
                <li><p></p></li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Address</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Phone Number</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Email</a>
                </li>
            </ul>
        </nav>
        <nav style={{flex:"1"}}>
            <ul style={{listStyle:"none"}}>
                <li style={{fontWeight:"bold",fontFamily:"Karla", color:"#495E57"}}>
                   Social Media Links
                </li>
                <li><p></p></li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Address</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Phone Number</a>
                </li>
                <li>
                   <a href="#0" style={{color:"black", textDecoration:"none",fontFamily:"Karla"}}>Email</a>
                </li>
            </ul>
        </nav>
    </footer>
    )
}

export default Footer;