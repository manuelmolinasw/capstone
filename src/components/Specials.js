function Specials(){
    return(
        <section style={{margin:"5px 15%"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h2 style={{fontFamily:"Karla"}}>This week's specials!</h2>
                <button style={{fontFamily:"Karla", fontSize:"18px", borderRadius:"16px", backgroundColor:"#F4CE14", fontWeight:"bold"}}>Online Menu</button>
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <article style={{flex:"1", margin:"1rem", backgroundColor:"#EDEFEE", borderRadius:"16px 16px 0px 0px"}}>
                    <img src="./greek salad.jpg" alt="Greek Salad" width="100%" style={{borderRadius:"16px 16px 0px 0px"}}></img>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h6 style={{fontFamily:"Markazi Text"}}>Greek Salad</h6>
                        <h6 style={{color:"#EE9972", fontFamily:"Karla"}}>$12.99</h6>
                    </div>
                    <p style={{fontFamily:"Karla",fontSize:"16px"}}>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <p style={{fontFamily:"Karla"}}>Order a delivery</p>
                </article>
                <article style={{flex:"1", margin:"1rem", backgroundColor:"#EDEFEE", borderRadius:"16px 16px 0px 0px"}}>
                    <img src="./bruchetta.svg" alt="Bruschetta" width="100%" style={{borderRadius:"16px 16px 0px 0px"}}></img>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h6 style={{fontFamily:"Markazi Text"}}>Bruschetta</h6>
                    <h6 style={{color:"#EE9972", fontFamily:"Karla"}}>$5.99</h6>
                    </div>
                    
                    <p style={{fontFamily:"Karla"}}>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <p style={{fontFamily:"Karla"}}>Order a delivery</p>
                </article>
                <article style={{flex:"1", margin:"1rem", backgroundColor:"#EDEFEE", borderRadius:"16px 16px 0px 0px"}}>
                    <img src="./lemon dessert.jpg" alt="Lemon Dessert" width="100%" style={{borderRadius:"16px 16px 0px 0px"}}></img>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h6 style={{fontFamily:"Markazi Text"}}>Lemon Dessert</h6>
                    <h6 style={{color:"#EE9972", fontFamily:"Karla"}}>$5.00</h6>
                    </div>
                    <p style={{fontFamily:"Karla"}}>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p style={{fontFamily:"Karla"}}>Order a delivery</p>
                </article>
            </div>
        </section>
)}
export default Specials;