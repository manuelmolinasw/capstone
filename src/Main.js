
function Main(){
    return (
    <main>
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
        <section>
            <div style={{textAlign:"center"}}>
                <h1 style={{fontFamily:"Markazi Text", fontSize:"40px"}}>Testimonials</h1>
            </div>
            <div style={{display:"flex", margin:"5px 15%", flexWrap:"wrap"}}>
                <article style={{flex:"1", margin:"1rem", fontFamily:"Karla"}}>
                    <p>Rating</p>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <img src="./Logo.svg" alt="Customer"></img>
                        <p>Name</p>
                    </div>
                    <p>Review Text</p>
                </article>
                <article style={{flex:"1", margin:"1rem", fontFamily:"Karla"}}>
                    <p>Rating</p>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <img src="./Logo.svg" alt="Customer"></img>
                        <p>Name</p>
                    </div>
                    <p>Review Text</p>
                </article>
                <article style={{flex:"1", margin:"1rem", fontFamily:"Karla"}}>
                    <p>Rating</p>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <img src="./Logo.svg" alt="Customer"></img>
                        <p>Name</p>
                    </div>
                    <p>Review Text</p>
                </article>
                <article style={{flex:"1", margin:"1rem", fontFamily:"Karla"}}>
                    <p>Rating</p>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <img src="./Logo.svg" alt="Customer"></img>
                        <p>Name</p>
                    </div>
                    <p>Review Text</p>
                </article>
            </div>
        </section>
        <section>
            <div style={{margin:"5px 15%", display: "flex"}}>
                <div style={{flex:"1"}}>
                    <h1 style={{fontFamily:"Markazi Text", fontSize:"40px"}}>Little Lemon</h1>
                    <h3 style={{fontFamily:"Markazi Text", fontSize:"32px"}}>Chicago</h3>
                    <p style={{fontFamily:"Karla"}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div style={{flex:"1", display:"flex", alignItems:"center"}}>
                    <img src="./restauranfood.jpg" alt="Restaurant Food" width="100%" style={{borderRadius:"16px"}}></img>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Main;