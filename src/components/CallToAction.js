function CallToAction(){
    return(
        <section style={{backgroundColor:"#495E57"}}>
            <div style={{margin:"5px 15%", display: "flex"}}>
                <div style={{flex:"1"}}>
                    <h1 style={{fontFamily:"Markazi Text", color:"#F4CE14", fontSize:"40px"}}>Little Lemon</h1>
                    <h3 style={{fontFamily: "Markazi Text", color:"#EDEFEE", fontSize:"32px"}}>Chicago</h3>
                    <p style={{fontFamily:"Karla", color:"#EDEFEE", fontSize:"18px"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.</p>
                    <button style={{fontFamily:"Karla", fontSize:"18px", borderRadius:"16px", backgroundColor:"#F4CE14", fontWeight:"bold"}}>Reserve a table</button>
                </div>
                <div style={{flex:"1", display:"flex", alignItems:"center"}}>
                    <img src="./restauranfood.jpg" alt="Restaurant Food" width="100%" style={{borderRadius:"16px"}}></img>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;