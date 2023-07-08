import  Nav from "./Nav"
function Header(){
    return (
    <header style={{display:"flex", justifyContent:"space-between", margin:"5px 5rem", flexWrap:"wrap"}}>
        <img src="./Logo.svg" alt="logo"></img>
        <Nav/>
    </header>
    )
}

export default Header;
